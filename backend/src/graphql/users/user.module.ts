import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";

import { UsersResolver } from './user.resolver';
import { UsersService } from './user.service';
import { UserSchema } from './schema/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{
            name: 'User',
            schema: UserSchema,
            collection: 'users'
        }])
    ],
    providers: [UsersResolver, UsersService]
})
export class UsersModule {}