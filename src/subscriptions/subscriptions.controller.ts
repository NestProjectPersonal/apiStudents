import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { SubscriptionsService } from './subscriptions.service';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';


@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  /*
@Post()
create(@Body() createRegistrationDto: CreateRegistrationDto) {
  //const { userId } = createRegistrationDto;
  return this.registrationService.create(createRegistrationDto);
}


@Post()
registerUser(@Body() createRegistrationDto: CreateRegistrationDto) {
  const { userId } = createRegistrationDto;
  return this.registrationService.registerUserToCourse(userId);
}
*/




  @Post()
  create(@Body() createSubscriptionDto: CreateSubscriptionDto) {
    return this.subscriptionsService.create(createSubscriptionDto);
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