import { MongooseModule } from '@nestjs/mongoose';

const dbConnection = MongooseModule.forRoot(
    process.env.DB_CONNECTION_STRING,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

export {
    dbConnection
}