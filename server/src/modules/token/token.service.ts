import { Injectable } from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class TokenService {
    constructor(private readonly jwtService: JwtService,
                private readonly config: ConfigService) {}

    async generateJwtToken(user){
        const payload = {user}
        // @ts-ignore
        return this.jwtService.sign(payload,{
            secret: this.config.get('secret_jwt'),
            expiresIn: this.config.get('expire_jwt')
        })
    }
}
