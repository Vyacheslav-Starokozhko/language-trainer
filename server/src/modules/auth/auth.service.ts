import {BadRequestException, Injectable} from '@nestjs/common';
import {AppError} from "../../common/errors";
import {CheckDTO, LoginDTO} from "./dto";
import * as bcrypt from 'bcrypt';
import {TokenService} from "../token/token.service";
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto";

@Injectable()
export class AuthService {
    constructor(
                private readonly userService: UsersService,
                private readonly tokenService: TokenService
    ) {}
    async loginUser(dto: LoginDTO): Promise<any> {

        const existUser = await this.userService.findUserByEmail(dto.email);
        if (!existUser) {
            throw new BadRequestException(AppError.USER_NOT_EXIST)
        }
        const validatePassword = await bcrypt.compare(dto.password, existUser.password);
        if (!validatePassword) {
            throw new BadRequestException(AppError.WRONG_DATA)
        }
        const user = await this.userService.publicUser(dto.email);
        const token = await this.tokenService.generateJwtToken(user)


        return {user, token};
    }


    async checkUser(dto: CheckDTO): Promise<any> {

        const existUser = await this.userService.findUserByEmail(dto.email);

        if (!existUser) {
            throw new BadRequestException(AppError.USER_NOT_EXIST)
        }
        return existUser
    }

    async registerUser(dto: CreateUserDto): Promise<any> {


        const existUser = await this.userService.findUserByEmail(dto.email);
        if (existUser) {
            throw new BadRequestException(AppError.USER_EXIST)
        }
        const newUser : CreateUserDto = await this.userService.createUser(dto)
        if (!newUser){
            return
        }

        const user = await this.userService.publicUser(newUser.email);
        const token = await this.tokenService.generateJwtToken(user)

        return {user, token};

    }
}
