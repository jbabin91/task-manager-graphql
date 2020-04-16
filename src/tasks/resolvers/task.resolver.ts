import { Resolver, Mutation, Args, Query, ID } from '@nestjs/graphql';

import { TasksService } from '../tasks.service';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dtos/create-task.dto';
import { UpdateTaskDto } from '../dtos/update-task.dto';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  async getTasks(): Promise<Task[]> {
    return this.tasksService.getTasks();
  }

  @Query(() => Task)
  async getTaskById(@Args('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Mutation(() => Task)
  async createTask(@Args('input') createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Mutation(() => Task)
  async updateTask(
    @Args('id') id: string,
    @Args('taskUpdate') updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Mutation(() => ID)
  async deleteTaskById(@Args('id') id: string): Promise<string> {
    return await this.tasksService.deleteTaskById(id);
  }

  @Query(() => String)
  async hello() {
    return 'hello';
  }
}
