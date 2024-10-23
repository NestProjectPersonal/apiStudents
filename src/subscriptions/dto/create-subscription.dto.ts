import { IsNumber, IsString } from "class-validator"

export class CreateSubscriptionDto {

    @IsString()
    userId:string

    @IsString()
    registrationdate:string

    @IsNumber()
    period: number
}
