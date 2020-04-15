import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { TasksService } from '../tasks.service';
import { Task } from '../entities/tasks.entity';
import { CreateTaskDto } from '../dtos/CreateTask.dto';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}
  @Mutation(() => Task)
  async createTask(@Args('input') createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
