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
  editingTodo: Todo | null = null;
  editedText: string = '';


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

  startEdit(todo: Todo) {
    this.editingTodo = todo;
    this.editedText = todo.text;
  }

  saveEdit(todo: Todo) {
    const newText = this.editedText.trim();
    if (newText && todo.text !== newText){
      this.todoService.updateTodoText(todo, newText)
    }
    this.editingTodo = null;
    this.editedText = '';
  }

  cancelEdit() {
    this.editingTodo = null;
    this.editedText = '';
  }
  
}