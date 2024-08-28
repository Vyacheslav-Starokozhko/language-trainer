import {IsString} from "class-validator";

export class CreateUserDto {
    @IsString()
    email: string;

    @IsString()
    password: string;
 }
export class UpdateUserDto {

    @IsString()
    name: string;

    @IsString()
    photo: string;

    @IsString()
    email: string;

    @IsString()
    password: string;
}
