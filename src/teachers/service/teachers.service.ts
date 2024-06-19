import { Injectable, NotFoundException } from '@nestjs/common';
import { TeacherRepository } from '../repositories/teacher.repository';
import { InterfaceTeacher } from '../schemas/models/teacher.interface';

@Injectable()
export class TeachersService {
  constructor(private readonly teacherRepository: TeacherRepository) {}

  async createTeacher(newTeacher: InterfaceTeacher): Promise<void> {
    return await this.teacherRepository.createTeacher(newTeacher);
  }

  async getAllTeachers(
    limit: number,
    page: number,
  ): Promise<InterfaceTeacher[]> {
    return await this.teacherRepository.getAllTeachers(limit, page);
  }

  async getOneTeacher(id: string): Promise<InterfaceTeacher> {
    const teacher = await this.teacherRepository.getOneTeacher(id);

    console.log('service :: getOneTeacher', teacher);

    if (!teacher) throw new NotFoundException('Teacher not found');

    return teacher;
  }

  async updateTeacher(
    id: string,
    data: Partial<InterfaceTeacher>,
  ): Promise<void> {
    return await this.teacherRepository.updateTeacher(id, data);
  }

  async deleteTeacher(id: string): Promise<void> {
    await this.teacherRepository.deleteTeacher(id);
  }
}
