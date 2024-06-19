import { InterfaceTeacher } from 'src/teachers/schemas/models/teacher.interface';
import { TeacherRepository } from '../teacher.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from 'src/teachers/schemas/teacher.schema';
import { Model } from 'mongoose';

export class TeacherMongooseRepository implements TeacherRepository {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}

  async createTeacher(newTeacher: InterfaceTeacher): Promise<void> {
    const createTeacher = new this.teacherModel(newTeacher);

    await createTeacher.save();
  }

  async getAllTeachers(
    limit: number,
    page: number,
  ): Promise<InterfaceTeacher[]> {
    const offset = (page - 1) * limit;

    return await this.teacherModel.find().skip(offset).limit(limit).exec();
  }

  async getOneTeacher(id: string): Promise<InterfaceTeacher> {
    return await this.teacherModel.findById(id).exec();
  }

  async updateTeacher(
    id: string,
    data: Partial<InterfaceTeacher>,
  ): Promise<void> {
    const foundTeacher = this.teacherModel.findById(id).exec();

    if (!foundTeacher) {
      return null;
    }

    await this.teacherModel
      .updateOne({ _id: id }, { ...foundTeacher, ...data })
      .exec();
  }

  async deleteTeacher(id: string): Promise<void> {
    await this.teacherModel.deleteOne({ _id: id }).exec();
  }
}
