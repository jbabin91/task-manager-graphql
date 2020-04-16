import { InputType, Field } from '@nestjs/graphql';
import { TaskStatus } from '../enums/TaskStatus';

@InputType()
export class UpdateTaskDto {
  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  status?: TaskStatus;
}
