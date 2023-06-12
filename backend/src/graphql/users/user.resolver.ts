import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Aggregate } from 'mongoose';

import { UsersService } from './user.service';
import { UserModel, DefaultUserModel } from './model';
import { CreateUserInput, UpdateUserInput } from './dto';

@Resolver()
export class UsersResolver {

    constructor(private readonly userService: UsersService) {}

    @Mutation(() => DefaultUserModel)
    createDefaultUser(){
        return this.userService.createDefaultUser();
    }

    @Mutation(() => UserModel)
    createUser(@Args('createUser') createUserInput: CreateUserInput): Promise<UserModel> {
        return this.userService.create(createUserInput);
    }

    @Query(() => [UserModel])
    findAll(): Promise<UserModel[]> {
        return this.userService.findAll()
    }

    @Query(() => [UserModel])
    findAllByDomainOfEmail(@Args('domain') domain: string): Aggregate<Array<UserModel>> {
        return this.userService.findAllByDomainOfEmail(domain)
    }

    @Query(() => UserModel)
    findOne(@Args('id') id: string): Promise<UserModel> {
        return this.userService.findOne(id)
    }

    @Mutation(() => UserModel)
    updateUser(@Args('updateUser') updateUserInput: UpdateUserInput): Promise<UserModel> {
        return this.userService.update(updateUserInput)
    }

    @Mutation(() => String)
    removeUser(@Args('id') id: string): Promise<string> {
        return this.userService.remove(id)
    }
}

