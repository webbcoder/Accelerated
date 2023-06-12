import {JwtModule} from "@nestjs/jwt";

export const jwtModule = JwtModule.register( {
    global: true,
    secret: process.env.AUTH_SECRET,
    signOptions: { expiresIn: '60s' },
});