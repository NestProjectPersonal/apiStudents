import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';

import { Subscription } from './entities/subscription.entity';
import { SubscriptionsController } from './subscriptions.controller'; 
import { SubscriptionsService } from './subscriptions.service';
import { User } from 'src/user/entities/user.entity';
import { CoursesService } from 'src/services/courses/courses.service';
import { CoursesController } from 'src/controllers/courses/courses.controller';

@Module({

  imports:[
    HttpModule,
    TypeOrmModule.forFeature([Subscription,User ])
  ],

  controllers: [SubscriptionsController,CoursesController],
  providers: [SubscriptionsService,CoursesService],
})
export class SubscriptionsModule {}
