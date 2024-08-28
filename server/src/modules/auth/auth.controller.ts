import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {LoginDTO} from "./dto";
import {CreateUserDto} from "../users/dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }
    @Post('register')
    register(@Body() dto: CreateUserDto): Promise<CreateUserDto>{
        return this.authService.registerUser(dto)
    }
    @Post('login')
    login(@Body() dto: LoginDTO): Promise<any>{
        return this.authService.loginUser(dto);
    }
}
