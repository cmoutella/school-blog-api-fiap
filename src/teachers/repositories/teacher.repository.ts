import { InterfaceTeacher } from '../schemas/models/teacher.interface';

export abstract class TeacherRepository {
  abstract getAllTeachers(
    limit: number,
    page: number,
  ): Promise<InterfaceTeacher[]>;
  abstract getOneTeacher(id: string): Promise<InterfaceTeacher>;
  abstract createTeacher(newTeacher: InterfaceTeacher): Promise<void>;
  abstract updateTeacher(
    id: string,
    data: Partial<InterfaceTeacher>,
  ): Promise<void>;
  abstract deleteTeacher(id: string): Promise<void>;
}
