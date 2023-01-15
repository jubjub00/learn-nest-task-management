import { Entity, PrimaryGeneratedColumn, Column, DeleteDateColumn } from "typeorm";
import { TaskStatus } from "./tast-status.enum";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    status: TaskStatus

    // @DeleteDateColumn()
    // deletedAt?: Date;
}