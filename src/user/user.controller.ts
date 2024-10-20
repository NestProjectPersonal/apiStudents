import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('users')
export class UserController {
  constructor(
    
    private readonly userService: UserService,
  
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
/*


@Get('courses')
async getCourses() {
  return this.userService.getCoursesByuuid();
}
*/

  
}

/*
@Get('courses/:_id')
async getCoursesByuuid(@Param('_id') _id: string) {
  return this.userService.getCoursesByuuid(_id);
}



@Patch(':id')
update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  return this.userService.update(+id, updateUserDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.userService.remove(+id);
}
*/

