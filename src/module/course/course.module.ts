import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { CoursesController } from 'src/controllers/courses/courses.controller';
import { CoursesService } from 'src/services/courses/courses.service';


@Module({

    imports: [ HttpModule
    ],  
    controllers: [CoursesController],
    providers: [CoursesService]

  })
  export class CourseModule { }


