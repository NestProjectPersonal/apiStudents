import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { InjectRepository } from '@nestjs/typeorm';


@Controller('subscriptions')
export class SubscriptionsController {
  constructor(
    private readonly subscriptionsService: SubscriptionsService
  ) { }

  /*
@Post()
create(@Body() createRegistrationDto: CreateRegistrationDto) {
  //const { userId } = createRegistrationDto;
  return this.registrationService.create(createRegistrationDto);
}


@Post()
registerUser(@Body() createSubscriptionDto: CreateSubscriptionDto) {
  const { userId } = createSubscriptionDto;
  return this.registerUserToCourse(userId);
}

*/
  
  
  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    //const { userId,registrationdate,period} = createSubscriptionDto;
        
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