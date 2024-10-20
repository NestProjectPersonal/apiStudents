import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './user.controller';
//import { CourseService } from './clients/course/course.service';



@Module({

  imports: [
    HttpModule,
    UserModule,
    TypeOrmModule.forFeature([
      User
    ])
  ],

  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
