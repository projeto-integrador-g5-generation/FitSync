import { Transform, TransformFnParams } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { Exercicio } from 'src/exercicio/entities/exercicio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_categorias' })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @Transform(({ value }: TransformFnParams) => value?.trim())
  @Column({ length: 5000, nullable: true })
  descricao: string;

  @OneToMany(() => Exercicio, (exercicio) => exercicio.categoria, {
    onDelete: 'CASCADE',
  })
  exercicio: Exercicio[];
}
