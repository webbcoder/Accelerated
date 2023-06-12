import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import {Aggregate, HydratedDocument, Model} from 'mongoose';
import * as bcrypt from 'bcrypt';

import { UserModel } from './model';
import { CreateUserInput, UpdateUserInput } from './dto';
import { UserNotFoundException } from '../../exceptions/user-not-found.exception';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('User')
        private readonly UserSchema: Model<UserModel>,
        private readonly jwt: JwtService
    ) {}

    findAll(): Promise<UserModel[]>{
        return this.UserSchema.find();
    }

    async createDefaultUser(): Promise<HydratedDocument<UserModel, unknown, {}>> {
        const name = 'John Doe';
        const email = 'john.doe@example.com';
        const user =  await this.UserSchema.findOne({name, email});
        if(user) return user;
        const password: string = await bcrypt.hash('password123', 8);
        const token: string = this.jwt.sign({name: 'John Doe', email: 'john.doe@example.com'});
        return this.UserSchema.create({
            name: 'John Doe',
            email: 'john.doe@example.com',
            password,
            token
        })
    }

    async create(createUserInput: CreateUserInput): Promise<UserModel> {
        createUserInput.password = await bcrypt.hash(createUserInput.password, 8);
        const token = this.jwt.sign({name: createUserInput.name, email: createUserInput.email});
        return this.UserSchema.create({...createUserInput, token});
    }

    async findOne(id: string): Promise<UserModel> {
        const user: UserModel = await this.UserSchema.findById(id);
        if(!user) throw new UserNotFoundException(id);
        return user;
    }

    findAllByDomainOfEmail(domain: string): Aggregate<Array<UserModel>> {
        return this.UserSchema.aggregate([{
            $match: {email:{$regex: domain, $options: "i"}}
        }])
    }

    async update(updateUserInput: UpdateUserInput): Promise<UserModel> {
        const {id} = updateUserInput;
        updateUserInput.password = await bcrypt.hash(updateUserInput.password, 8);
        const updatedUser: UserModel = await this.UserSchema.findOneAndUpdate(
            {_id: id},
            updateUserInput,
            {new: true}
        );
        if(!updatedUser) throw new UserNotFoundException(id);
        return updatedUser;

    }

    async remove(id: string): Promise<string> {
        await this.UserSchema.deleteOne({_id: id});
        return id;
    }

}