import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  newTask: Task = {
    title: '',
    done: false,
    deadline: undefined,
  };

  @Output() addTask = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  submit() {
    this.addTask.emit({
      title: this.newTask.title,
      done: false,
      deadline: this.newTask.deadline
        ? new Date(this.newTask.deadline)
        : undefined,
    });

    this.newTask = {
      title: '',
      done: false,
      deadline: undefined,
    };
  }
}
