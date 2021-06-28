import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Todo } from "../model/Todo";


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  constructor() {
    this.todos = [
      {
        "id": "1",
        "title": "Learn Angular",
        isComplete: false,
        date: new Date()
      },
      {
        "id": "2",
        "title": "Learn JavaScript",
        isComplete: true,
        date: new Date()
      },
      {
        "id": "3",
        "title": "Learn React",
        isComplete: true,
        date: new Date()
      },
    ]
  }

  getTodos() {
    return of(this.todos);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(todo: Todo){
    this.todos.map(singleTodo => {
      if(todo.id === singleTodo.id){
        singleTodo.isComplete = !singleTodo.isComplete
      }
    })
  }

  deleteTodo(todo: Todo){
    const IndexOfTodo = this.todos.findIndex(currentObj => currentObj.id === todo.id)
    this.todos.splice(IndexOfTodo, 1);
  }

}
