import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule, ConfigService} from "@nestjs/config";
import configurations from "../../configurations";
import {AuthModule} from "../auth/auth.module";
import {TokenModule} from "../token/token.module";
import * as pg from 'pg';
import {HttpModule} from "@nestjs/axios";
import {User} from "../users/models/user.model";
import {UsersModule} from "../users/users.module";


@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          load: [configurations]
      }),

      SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => ({
              dialect: configService.get('db_dialect'),
              dialectModule: pg,
              host: configService.get('db_host'),
              port: configService.get('db_port'),
              username: configService.get('db_user'),
              password: configService.get('db_password'),
              database: configService.get('db_name'),
              synchronize: true,
              autoLoadModels: true,
              dialectOptions: {
                  ssl: {
                      require: true,
                      rejectUnauthorized: false
                  }
              },
              models: [
                 User
              ]
          })
      }),
      AuthModule,
      TokenModule,
      UsersModule,
      HttpModule.register({
          timeout: 1000 // Set your timeout value here
          // maxRedirects: 5,
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
