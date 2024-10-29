import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { Subscription } from './entities/subscription.entity';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class SubscriptionsService {

  constructor(

    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>

  ) { }

  async createSubscription(createSubscriptionDto: CreateSubscriptionDto):Promise<Subscription> {

    const { userId,registrationdate,period } = createSubscriptionDto


    const user = await this.userRepository.findOneBy({id:userId});
    //const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`Estudiante con ID ${userId} no encontrado`);
    }


    const newdata = this.subscriptionRepository.create({
      user,
      registrationdate,
      period
    })
    return await this.subscriptionRepository.save(newdata)
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





async create(createRegistrationDto: CreateRegistrationDto) {
  
const { userId } = createRegistrationDto

const user = await this.userRepository.findOne({ where: { id: userId } });
if (!user) {
  throw new NotFoundException(`Estudiante con ID ${userId} no encontrado`);
  }


  const registration = this.registrationRepository.create(createRegistrationDto)
  return this.registrationRepository.save(registration)
}
*/

/*

async registerUserToCourse(
  userId: string, 
  //date:string,
    //periodacademic:number,
  ): Promise<Registration> {
    // Verifica que el estudiante existe
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`Estudiante con ID ${userId} no encontrado`);
    }

    // Verifica que el curso existe
    //const curso = await this.cursoRepository.findOne({ where: { id: cursoId } });
    //if (!curso) {
      //throw new NotFoundException(`Curso con ID ${cursoId} no encontrado`);
    //}

    // Crear la nueva matrícula
    
    const newRegistration = this.registrationRepository.create({
      user,
    
    
    });
    
    
    
    // Guardar la matrícula en la base de datos
    return await this.registrationRepository.save(newRegistration);
  }
  */