import { Survey } from '@/interfaces/survey.interface';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class SurveyEntity extends BaseEntity implements Survey {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  job: string;

  @Column()
  houseType: string;

  @Column()
  wishContact: string;

  @Column()
  phone: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  buyAmountToPay: number;

  @Column()
  monthAmountToPay: number;

  @Column()
  startAmountToPay: number;

  @Column()
  wishOwnHouse: string;
}
