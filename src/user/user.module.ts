import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { HttpModule } from '@nestjs/axios';

import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConfigModule } from '@nestjs/config';
//import { CourseService } from './clients/course/course.service';





@Module({

  imports: [
    UserModule,
    ConfigModule.forRoot({}),
    TypeOrmModule.forFeature([
      User
    ])
  ],

  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
