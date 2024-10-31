import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {


  constructor(

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private configService: ConfigService,

  ) {}

  async create(createUserDto: CreateUserDto) {
    
    const users = this.userRepository.create(createUserDto)
    users.creditsUser = this.configService.get<number>('DEFAULT_CREDIT')
    await this.userRepository.save(users)

    return users;
  }

  findAll() {
    return this.userRepository.find() 
  }

  findOne(id: string) {
    return this.userRepository.findOneBy({ id })
  }
  
  //endpoint  matricula
}

  
  