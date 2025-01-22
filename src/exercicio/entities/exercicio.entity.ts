import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity({ name: 'tb_exercicios' })
export class Exercicio {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ length: 255, nullable: false })
  nome: string;

  @Column({ type: 'int', nullable: true })
  tempo: number;

  @Column({ type: 'int', nullable: true })
  series: number;

  @Column({ type: 'int', nullable: true })
  repeticoes: number;

  @Column({ type: 'int', nullable: true })
  descanso: number;

  @Column({ type: 'int', nullable: true })
  carga: number;

  @ManyToOne(() => Categoria, (categoria) => categoria.exercicio, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;
}
