import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { CourseModule } from './module/course/course.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [UserModule,SubscriptionsModule,CourseModule],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    CourseModule,
    SubscriptionsModule,
  ],
  providers: [],

})
export class AppModule {}


