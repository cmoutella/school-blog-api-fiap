import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
} from '@nestjs/common';
import { TeachersService } from '../service/teachers.service';
import { z } from 'zod';
import { ZodValidationPipe } from 'src/shared/pipe/zod-validation.pipe';

const createTeacherSchema = z.object({
  name: z.string(),
  age: z.coerce.number(),
});
type CreateTeacher = z.infer<typeof createTeacherSchema>;

const updateTeacherSchema = z.object({
  name: z.string().optional(),
  cpf: z.coerce.string().optional(),
  age: z.number().optional(),
});
type UpdateTeacher = z.infer<typeof updateTeacherSchema>;

@Controller('teacher')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @UsePipes(new ZodValidationPipe(createTeacherSchema))
  @Post()
  async createTeacher(@Body() { name, age }: CreateTeacher) {
    await this.teachersService.createTeacher({ name, age });
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
    @Body(new ZodValidationPipe(updateTeacherSchema)) data: UpdateTeacher,
  ) {
    await this.teachersService.updateTeacher(id, data);
  }

  @Delete(':id')
  async deleteTeacher(@Param('id') id: string) {
    await this.teachersService.deleteTeacher(id);
  }
}
