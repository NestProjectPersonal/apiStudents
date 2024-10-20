import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { HttpService } from '@nestjs/axios';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {


  constructor(

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    //private readonly httpService: HttpService

  ) { }

  async create(createUserDto: CreateUserDto) {

    const users = this.userRepository.create(createUserDto)
    await this.userRepository.save(users)

    return users;
  }

  findAll() {
    return this.userRepository.find()
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id })
  }
  
}
/*

async getCoursesByuuid(): Promise<any> {
  //async getCoursesByuuid(_id: string): Promise<any> {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`http://localhost:3001/api/courses`), 
        //this.httpService.get(`http://localhost:3001/api/courses/${_id}`), 
      );
      console.log(response)
      return response.data;
    } catch (error) {
      throw new Error('curso no encontrado');
    }
  }
  
  */

//Manejo de excepciones!!! 




  //endpoint  matricula

  /*
  
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
  
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  */
