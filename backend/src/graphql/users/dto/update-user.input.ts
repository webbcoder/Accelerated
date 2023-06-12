import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

import { CreateUserInput } from './create-user.input';

@InputType()
export class UpdateUserInput extends PartialType<CreateUserInput>(CreateUserInput) {
    @IsMongoId()
    @Field(() => ID)
    id: string;
}