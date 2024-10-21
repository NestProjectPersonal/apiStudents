import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CourseService } from './clients/course/course.service';





@Module({

  imports: [
    HttpModule,
    UserModule,
    TypeOrmModule.forFeature([
      User
    ])
  ],

  controllers: [UserController],
  providers: [UserService,CourseService],
})
export class UserModule { }
