import { Module } from '@nestjs/common';

import { configModule, graphqlModule, dbConnection, jwtModule } from './config';
import { HelloModule } from './api/hello/hello.module';
import { UsersModule } from './graphql/users/user.module';

@Module({
  imports: [
    configModule,
    graphqlModule,
    dbConnection,
    jwtModule,
    HelloModule,
    UsersModule
  ]
})
export class AppModule {}
