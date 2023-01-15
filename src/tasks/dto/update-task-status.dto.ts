import { IsEnum } from "class-validator";
import { TaskStatus } from "../tast-status.enum";

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus
}