import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from 'src/services/courses/courses.service';

@Controller('users')
export class CoursesController {

    constructor(
    
        private readonly courseService: CoursesService
      
      ) {}
  
    @Get('courses/:_id')
    async getCoursesByuuid(@Param('_id') _id: string) {
      return this.courseService.getCoursesByuuid(_id);
    }
}
