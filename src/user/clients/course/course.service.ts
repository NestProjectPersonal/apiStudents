import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';


@Injectable()
export class CourseService {

    //Inyeccion
    constructor(
        private readonly httpService: HttpService
    ){}

    //GetFindOneCourses

    async getCoursesByuuid(_id: string): Promise<any> {
        try {
          const response = await firstValueFrom(
            this.httpService.get(`http://localhost:3001/courses/${_id}`), 
          );
          console.log(response)
          return response.data;
        } catch (error) {
          throw new Error('curso no encontrado');
        }
      }
    //Verificar manejo de excepciones
}
