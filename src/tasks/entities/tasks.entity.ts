import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn, Column, Entity, BaseEntity } from 'typeorm';

import { TaskStatus } from '../enums/TaskStatus';

@Entity()
@ObjectType()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description?: string;

  @Column()
  @Field()
  status: TaskStatus;
}
