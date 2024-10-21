import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CourseService } from './clients/course/course.service';


@Controller('users')
export class UserController {
  constructor(
    
    private readonly userService: UserService,
    private readonly courseService: CourseService
  
  ) {}


  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get('courses/:_id')
  async getCoursesByuuid(@Param('_id') _id: string) {
    return this.courseService.getCoursesByuuid(_id);
  }
 
}



