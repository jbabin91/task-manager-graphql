import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TasksService } from './tasks.service';
import { TaskRepository } from './Task.repository';
import { TasksResolver } from './resolvers/Tasks.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository])],
  providers: [TasksResolver, TasksService],
})
export class TasksModule {}
