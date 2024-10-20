import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './user/user.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import { CourseService } from './user/clients/course/course.service';
import { UserService } from './user/user.service';
import { User } from './user/entities/user.entity';
import { RegistrationModule } from './registration/registration.module';


@Module({
  imports: [
    HttpModule,
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
  ],
  
  //providers:[UserService],
  //exports:[UserService]

})
export class AppModule {}


