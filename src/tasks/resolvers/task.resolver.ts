import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';

import { TasksService } from '../tasks.service';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/CreateTask.dto';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Mutation(() => Task)
  async createTask(@Args('input') createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
