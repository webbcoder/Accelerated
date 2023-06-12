import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    email: string;

    @Field()
    password: string;
}