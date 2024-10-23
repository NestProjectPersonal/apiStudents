import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from 'src/user/entities/user.entity';
import { Subscription } from 'src/subscriptions/entities/subscription.entity';

@Injectable()
export class SubscriptionsService {

    constructor(

        @InjectRepository(Subscription)
        private readonly subscriptionRepository: Repository<Subscription>,
        @InjectRepository(User)
        private readonly userRepository: Repository<User>

      ) { }

      async registerUserToCourse(
        userId: string, 
        //date:string,
          //periodacademic:number,
        ): Promise<Subscription> {
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
          
          const newRegistration = this.subscriptionRepository.create({
            user,
          });
          
          
          
          // Guardar la matrícula en la base de datos
          return await this.subscriptionRepository.save(newRegistration);
        }
        


}
