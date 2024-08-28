import {Controller, Get} from '@nestjs/common';
import {UsersService} from "./users.service";

@Controller('persons')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }

    // @Roles('admin')
    // @UseGuards(RolesGuard)
    // @UseGuards(JwtAuthGuard)
    @Get()
    getUsers(){
        return "";
    }
}
