import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ExercicioService } from '../services/exercicio.service';
import { Exercicio } from '../entities/exercicio.entity';

@Controller('/exercicios')
export class ExercicioController {
  constructor(private readonly exercicioService: ExercicioService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Exercicio[]> {
    return this.exercicioService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Exercicio> {
    return this.exercicioService.findById(id);
  }

  @Get('/nome-exercicio/:nome')
  @HttpCode(HttpStatus.OK)
  findByTitulo(@Param('nome') nome: string): Promise<Exercicio[]> {
    return this.exercicioService.findByNome(nome);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() exercicio: Exercicio): Promise<Exercicio> {
    return this.exercicioService.create(exercicio);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() exercicio: Exercicio): Promise<Exercicio> {
    return this.exercicioService.update(exercicio);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.exercicioService.delete(id);
  }
}
