import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeachersService } from '../service/teachers.service';
import { InterfaceTeacher } from '../schemas/models/teacher.interface';

@Controller('teacher')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  async createTeacher(@Body() teacher: InterfaceTeacher) {
    await this.teachersService.createTeacher(teacher);
  }

  @Get()
  async getAllTeachers(limit: number, page: number) {
    return this.teachersService.getAllTeachers(limit, page);
  }

  @Get(':id')
  async getOneTeacher(@Param('id') id: string) {
    return await this.teachersService.getOneTeacher(id);
  }

  @Put(':id')
  async updateTeacher(
    @Param('id') id: string,
    @Body() data: Partial<InterfaceTeacher>,
  ) {
    await this.teachersService.updateTeacher(id, data);
  }

  @Delete(':id')
  async deleteTeacher(@Param('id') id: string) {
    await this.teachersService.deleteTeacher(id);
  }
}
