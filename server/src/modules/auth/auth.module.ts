import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TokenModule} from "../token/token.module";
import {JwtStrategy} from "../../strategy";
import {UsersModule} from "../users/users.module";

@Module({
  imports: [UsersModule,TokenModule],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
