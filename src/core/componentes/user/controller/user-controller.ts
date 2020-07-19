import { Controller, Get, Post, Body, Query, UseGuards, Req } from '@nestjs/common';
import CreateUserDTO from '../dto/create-user-dto';
import { UserService } from '../services/user/user.service';
import ViewUserDTO from '../dto/view-user-dto';
import { User } from '../../../../entities/user';
import { ClassTransformService } from 'src/core/services/class-transform/class-transform.service';
import { AuthService } from 'src/core/auth/auth-service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/core/auth/jwt.aut.guard';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly classTransformService: ClassTransformService, private readonly authService: AuthService) { }
    @UseGuards(JwtAuthGuard)
    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO): Promise<ViewUserDTO> {
        const user: User = this.classTransformService.getEntity<User>(User, createUserDTO, { groups: ["creation"] });
        const saveUser = await this.userService.createUser(user);
        return await this.classTransformService.getEntity(ViewUserDTO, saveUser);
    }

    @Get('email-confirmation')
    async emailConfimation(@Query() params) {
        return await this.userService.updateStatusAccount(params.token);
    }
    
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req) {
        return this.authService.login(req.user);
    }
}