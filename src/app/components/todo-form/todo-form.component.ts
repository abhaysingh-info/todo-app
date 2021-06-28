import { Component, OnInit } from '@angular/core';
import {Todo} from "src/app/model/Todo";
import { TodoService } from "src/app/service/todo.service";
import {v4 as uid4} from "uuid";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoTitle: string

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  addTodo() {
    this.todoService.addTodo({
      id: uid4,
      title: this.todoTitle,
      date: new Date(),
      isComplete: false,
    });
    this.todoTitle = "";
  }

}
