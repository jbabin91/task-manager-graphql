import { CreateTaskDto } from './dtos/CreateTask.dto';
import { Injectable } from '@nestjs/common';
import { TaskRepository } from './Task.repository';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.getTasks();
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return await this.taskRepository.createTask(createTaskDto);
  }
}
