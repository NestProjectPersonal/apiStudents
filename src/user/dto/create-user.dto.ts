import { IsEmail, IsNumber, IsOptional, IsString } from "class-validator"


export class CreateUserDto {

    @IsString()
    firstName: string
    
    @IsString()
    lastName: string
    
    @IsEmail()
    email: string

    @IsString()
    profession: string

    @IsNumber()
    @IsOptional()
    totalcredit: number

}
