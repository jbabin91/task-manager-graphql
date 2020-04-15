import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { Task } from './entities/tasks.entity';
import { CreateTaskDto } from './dtos/CreateTask.dto';
import { TaskStatus } from './enums/TaskStatus';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async createTask({ title, description }: CreateTaskDto): Promise<Task> {
    const task = this.create({
      title,
      description,
      status: TaskStatus.IS_OPEN,
    });

    try {
      await task.save();
      return task;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
