import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Categoria } from './categoria/entities/categoria.entity';
import { Exercicio } from './exercicio/entities/exercicio.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { ExercicioModule } from './exercicio/exercicio.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Categoria, Exercicio, Usuario],
      synchronize: true,
      logging: true,
    }),
    CategoriaModule,
    ExercicioModule,
    UsuarioModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
