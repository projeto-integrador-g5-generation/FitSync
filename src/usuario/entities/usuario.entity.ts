import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { NumericTransformer } from '../../util/numerictransformer';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  nome: string;

  @IsNotEmpty()
  @Column({ type: 'date', nullable: false })
  data_nascimento: Date;

  @IsNotEmpty()
  @Column('decimal', { precision: 5, scale: 2, nullable: true })
  peso: number;

  @IsNotEmpty()
  @Column('decimal', { precision: 3, scale: 2, nullable: true })
  altura: number;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  senha: string;

  @Column({ length: 5000 })
  foto: string;

  @Column('decimal',{precision: 5, scale: 2, transformer: new NumericTransformer()})
  imc: number;
}
