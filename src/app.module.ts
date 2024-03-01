import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: 
  // Config do environment
  [ConfigModule.forRoot({
    envFilePath: ['.env.development.local'],
  }),

  // Config do banco
  TypeOrmModule.forRoot({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME
  })

  // Outros Módulos

  ,UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
