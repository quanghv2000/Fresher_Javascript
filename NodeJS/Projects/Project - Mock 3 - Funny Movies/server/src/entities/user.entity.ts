/* eslint-disable prettier/prettier */
import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base/base.entity';
import { Exclude } from 'class-transformer';

@Entity('user')
export class User extends BaseEntity {
    @Column()
    email: string;

    @Column({
        type: 'varchar',
    })
    @Exclude()
    password: string;

    @Column({nullable: false, default: "ROLE_USER"})
    role: string;
}