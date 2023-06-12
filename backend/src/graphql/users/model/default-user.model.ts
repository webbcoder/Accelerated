import {Field, ObjectType, PartialType} from '@nestjs/graphql';

import { UserModel } from './user.model';

@ObjectType()
export class DefaultUserModel extends PartialType<UserModel>(UserModel) {
    @Field()
    token: string;
}