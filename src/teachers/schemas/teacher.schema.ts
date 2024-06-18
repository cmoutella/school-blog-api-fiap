import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { InterfaceTeacher } from './models/teacher.interface';
import mongoose, { HydratedDocument } from 'mongoose';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export class Teacher implements InterfaceTeacher {
  @Prop({ type: mongoose.Schema.Types.ObjectId })
  id?: string;
  @Prop()
  name: string;
  @Prop()
  age: number;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
