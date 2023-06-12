import {Field, InputType} from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsString()
    @IsNotEmpty()
    @Field()
    name: string;

    @IsEmail()
    @Field()
    email: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    password: string;
}