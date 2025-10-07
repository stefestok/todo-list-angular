import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Todo, TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  newTodoText = '';


  constructor(public todoService: TodoService) {}

  get todos() {
    return this.todoService.todos();
  }

  addTodo() {
    const text = this.newTodoText.trim();
    if (text) {
      this.todoService.addTodo(text);
      this.newTodoText = '';
    }
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo);
  }

  toggleTodo(todo: Todo){
    this.todoService.toggleTodo(todo);
  }
  
}