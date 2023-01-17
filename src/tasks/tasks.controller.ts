import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UseGuards } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TaskStatus } from './tast-status.enum';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query() filterDto: GetTaskFilterDto): Promise<Task[]> {
    return this.tasksService.getFilterTasks(filterDto)
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }
  

  @Post()
  createTask( @Body()createTaskDto: CreateTaskDto ): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id:string): Promise<void> {
    return this.tasksService.deleteTask(id)
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id:string,
    @Body() updateTaskStatusDto:UpdateTaskStatusDto,
  ): Promise<Task>{
    return this.tasksService.updateTaskStatus(id,updateTaskStatusDto.status)
  }
}
