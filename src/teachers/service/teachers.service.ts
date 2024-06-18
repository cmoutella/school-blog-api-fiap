import { Injectable } from '@nestjs/common';
import { TeacherRepository } from '../repositories/teacher.repository';
import { InterfaceTeacher } from '../schemas/models/teacher.interface';

@Injectable()
export class TeachersService {
  constructor(private readonly teacherRepository: TeacherRepository) {}

  async createTeacher(newTeacher: InterfaceTeacher): Promise<void> {
    return this.teacherRepository.createTeacher(newTeacher);
  }

  async getAllTeachers(
    limit: number,
    page: number,
  ): Promise<InterfaceTeacher[]> {
    return this.teacherRepository.getAllTeachers(limit, page);
  }

  async getOneTeacher(id: string): Promise<InterfaceTeacher> {
    return this.teacherRepository.getOneTeacher(id);
  }

  async updateTeacher(
    id: string,
    data: Partial<InterfaceTeacher>,
  ): Promise<void> {
    return this.teacherRepository.updateTeacher(id, data);
  }

  async deleteTeacher(id: string): Promise<void> {
    await this.teacherRepository.deleteTeacher(id);
  }
}
