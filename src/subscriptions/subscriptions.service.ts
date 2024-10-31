import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Subscription } from './entities/subscription.entity';
import { User } from 'src/user/entities/user.entity';
import { CoursesService } from 'src/services/courses/courses.service';


@Injectable()
export class SubscriptionsService {

  constructor(

    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly coursesServices: CoursesService,
    

  ) { }

  async createSubscription(createSubscriptionDto: CreateSubscriptionDto):Promise<Subscription> {

    const { userId,courseId,registrationdate,period } = createSubscriptionDto

    const user = await this.userRepository.findOneBy({id:userId});
    const course = await this.coursesServices.getCoursesByuuid(courseId)

    if (!user) {
      throw new NotFoundException(`Estudiante con ID ${userId} no encontrado`);
    }
    if (!course) {
      throw new NotFoundException(`Curso con ID ${courseId} no encontrado`);
    }
    if (user.creditsUser  < course.credits) {
      throw new BadRequestException(`El usuario no tiene suficientes créditos para la suscripción`);
    }

    

  
    await this.userRepository.decrement({id:userId},'creditsUser',course.credits)

    const newSubscription  = this.subscriptionRepository.create({
      user,
      courseId,
      registrationdate,
      period,
      
    })
    return await this.subscriptionRepository.save(newSubscription )
  }


  
  findAll() {
    return this.subscriptionRepository.find()
  }

  findOne(id: string) {
    return this.subscriptionRepository.findOneBy({ id })
  }


}


/*

update(id: number, updateSubscriptionDto: UpdateSubscriptionDto) {
  return `This action updates a #${id} subscription`;
}

remove(id: number) {
  return `This action removes a #${id} subscription`;
}

*/