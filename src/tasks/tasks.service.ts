import { CreateTaskDto } from './dtos/CreateTask.dto';
import { Injectable } from '@nestjs/common';
import { TaskRepository } from './Task.repository';
import { Task } from './entities/tasks.entity';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.createTask(createTaskDto);
  }
}
