import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { RegistrationModule } from './registration/registration.module';
import { CourseModule } from './module/course/course.module';


@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [UserModule],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    RegistrationModule,
    CourseModule,
  ],

})
export class AppModule {}


