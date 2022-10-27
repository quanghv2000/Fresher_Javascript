/* eslint-disable prettier/prettier */
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Movie } from './movie.entity';
import { User } from './user.entity';

@Entity('vote')
export class Vote extends BaseEntity {
  @Column()
  status: string;

  @ManyToOne(() => Movie)
  movie: Movie;

  @ManyToOne(() => User)
  user: User;
}
