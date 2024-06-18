import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Teacher, TeacherSchema } from './schemas/teacher.schema';
import { TeacherRepository } from './repositories/teacher.repository';
import { TeacherMongooseRepository } from './repositories/mongoose/teacher.mongoose.repository';
import { TeachersService } from './service/teachers.service';
import { TeachersController } from './controllers/teachers.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }]),
  ],
  providers: [
    {
      provide: TeacherRepository,
      useClass: TeacherMongooseRepository,
    },
    TeachersService,
  ],
  controllers: [TeachersController],
})
export class TeachersModule {}
