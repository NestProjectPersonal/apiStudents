import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateSubscriptionDto {

    @IsNotEmpty()
    @IsString()
    userId:string
    
    @IsNotEmpty()
    @IsString()
    courseId:string


    @Transform(({ value }) => value ? value.toISOString() : null)
    registrationdate: Date;

    @IsNumber()
    period: number
}
