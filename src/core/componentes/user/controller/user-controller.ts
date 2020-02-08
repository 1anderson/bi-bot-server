import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import CreateUserDTO from '../dto/create-user-dto';
import { UserService } from '../services/user/user.service';
import  ViewUserDTO  from '../dto/view-user-dto';
import { User } from '../../../../entities/user';
import { ClassTransformService } from 'src/core/services/class-transform/class-transform.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService, private readonly classTransformService: ClassTransformService) { }
    @Post()
    async createUser(@Body() createUserDTO: CreateUserDTO): Promise<ViewUserDTO> {
        const user: User = this.classTransformService.getEntity<User>(User, createUserDTO,{ groups: ["creation"] });
        const saveUser = await this.userService.createUser(user);
        return await this.classTransformService.getEntity(ViewUserDTO, saveUser);
    }

    @Get('email-confirmation/:token')
    async emailConfimation(@Param() params) {
        console.log(params);
        
       // return await this.classTransformService.getEntity(ViewUserDTO, saveUser);
    }
   

}