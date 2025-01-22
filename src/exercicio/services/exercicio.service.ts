import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Exercicio } from '../entities/exercicio.entity';

@Injectable()
export class ExercicioService {
  constructor(
    @InjectRepository(Exercicio)
    private exercicioRepository: Repository<Exercicio>,
  ) {}

  async findAll(): Promise<Exercicio[]> {
    return this.exercicioRepository.find({relations:{
      categoria : true,
    }});
  }

  async findById(id: number): Promise<Exercicio> {
    const exercicio = await this.exercicioRepository.findOne({ where: { id },relations:{
      categoria: true,
    } });

    if (!exercicio) {
      throw new HttpException(
        'Exercicio não encontrado.',
        HttpStatus.NOT_FOUND,
      );
    }

    return exercicio;
  }

  async findByNome(nome: string): Promise<Exercicio[]> {
    return this.exercicioRepository.find({
      where: { nome: ILike(`%${nome}%`) },
      relations:{
        categoria : true,
      }
    });
  }

  async create(exercicio: Exercicio): Promise<Exercicio> {
    return await this.exercicioRepository.save(exercicio);
  }

  async update(exercicio: Exercicio): Promise<Exercicio> {
    await this.findById(exercicio.id);
    return await this.exercicioRepository.save(exercicio);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);

    return await this.exercicioRepository.delete(id);
  }
}
