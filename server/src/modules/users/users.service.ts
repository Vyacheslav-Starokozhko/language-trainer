import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";

import {User} from "./models/user.model";
import * as bcrypt from "bcrypt";
import {CreateUserDto, UpdateUserDto} from "./dto";

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User) private readonly userRepo: typeof User
    ) {
    }

    async hashPassword(password) {
        return bcrypt.hash(password, 10)
    }

    async createUser(dto: CreateUserDto): Promise<CreateUserDto> {

        dto.password = await this.hashPassword(dto.password)
        const newUser = {
            "email": dto.email,
            "password": dto.password
        }
        const user = await this.userRepo.create(newUser)
        return dto;
    }

    async updateUser(email: string, dto: UpdateUserDto): Promise<UpdateUserDto> {
        await this.userRepo.update(dto, {where: {email}})
        return dto;
    }

    async deleteUser(email: string) {
        return this.userRepo.destroy({where: {email}});
    }

    async publicUser(email: string) {
        return this.userRepo.findOne({
            rejectOnEmpty: true,
            where: {email},
            attributes: {exclude: ['password']},
            include: {
                all: true
            }
        })
    }
    async findUserByEmail(email: string) {
        return this.userRepo.findOne({where: {email}})
    }
}
