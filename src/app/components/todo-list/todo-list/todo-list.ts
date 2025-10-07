import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
  todos = [
    { text: 'Precvičenie Angularu', completed: false },
    { text: 'Vytvoriť todo-list appku', completed: false }
  ];

  newTodoText = '';

  addTodo() {
    const text = this.newTodoText.trim();
    if (text) {
      this.todos.push({ text, completed: false });
      this.newTodoText = '';
    }
  }

  removeTodo(todoToRemove: {text: string; completed: boolean}) {
    this.todos = this.todos.filter(todo => todo !== todoToRemove);
  }
}