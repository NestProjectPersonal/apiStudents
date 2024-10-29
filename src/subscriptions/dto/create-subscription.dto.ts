import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateSubscriptionDto {

    @IsNotEmpty()
    @IsString()
    userId:string
    
    @IsNotEmpty()
    @IsString()
    courseId:string

    @IsString()
    registrationdate:string

    @IsNumber()
    period: number
}
