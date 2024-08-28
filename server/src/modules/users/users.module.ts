import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {JwtService} from "@nestjs/jwt";

@Module({
  controllers: [UsersController],
  providers: [UsersService,JwtService],
  imports: [SequelizeModule.forFeature([User])],
  exports:[UsersService]
})
export class UsersModule {}
