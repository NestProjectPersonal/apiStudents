import { IsNotEmpty, isNumber, IsNumber } from "class-validator";

export class CreateRegistrationDto {


    @IsNumber()
    year: number
    
    @IsNumber()
    periodacademic: number

    
    //@IsNotEmpty()


}
