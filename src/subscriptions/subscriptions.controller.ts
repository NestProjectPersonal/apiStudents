import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';

import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';



@Controller('subscriptions')
export class SubscriptionsController {
  constructor(
    private readonly subscriptionsService: SubscriptionsService,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }
  
  @Post()
  async create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    const  {userId}  = createSubscriptionDto;
    const user = await this.userRepository.findOneBy({id:userId});

    if (!user) {
      throw new NotFoundException(`Estudiante con ID ${userId} no encontrado`);
    }
        
    return this.subscriptionsService.createSubscription( createSubscriptionDto);
  }

  @Get()
  findAll() {
    return this.subscriptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subscriptionsService.findOne(id);
  }

}
/*

@Patch(':id')
update(@Param('id') id: string, @Body() updateSubscriptionDto: UpdateSubscriptionDto) {
  return this.subscriptionsService.update(+id, updateSubscriptionDto);
}

@Delete(':id')
remove(@Param('id') id: string) {
  return this.subscriptionsService.remove(+id);
}
*/