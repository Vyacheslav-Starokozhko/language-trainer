import {IsString} from "class-validator";

export class LoginDTO{
    @IsString()
    email: string
    @IsString()
    password: string
}

export class CheckDTO{
    @IsString()
    email: string
}
