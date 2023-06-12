import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop()
    name: String;

    @Prop()
    email: String;

    @Prop()
    password: String;

    @Prop()
    token: String;
}

export const UserSchema = SchemaFactory.createForClass(User);