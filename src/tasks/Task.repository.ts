import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { CreateTaskDto } from './dtos/CreateTask.dto';
import { Task } from './entities/task.entity';
import { TaskStatus } from './enums/TaskStatus';

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  async getTasks(): Promise<Task[]> {
    const query = this.createQueryBuilder('task');
    const tasks = await query.getMany();

    return tasks;
  }
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
