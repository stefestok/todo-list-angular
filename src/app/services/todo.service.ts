import { Injectable, signal } from "@angular/core";

export interface Todo {
    text: string;
    completed: boolean;
}

@Injectable ({ providedIn: 'root'})
export class TodoService {
    private STORAGE_KEY = 'todos';

    private loadTodosFromStorage(): Todo[] {
        const data = localStorage.getItem(this.STORAGE_KEY);
        return data ? JSON.parse(data) : [
            { text: 'Precvičenie Angularu', completed: false },
            { text: 'Vytvoriť todo-list appku', completed: false }
        ];
    }

    private saveTodosToStorage(todos: Todo[]) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos))
    }

    private readonly _todos = signal<Todo[]>(this.loadTodosFromStorage());
    
    readonly todos = this._todos.asReadonly();

    addTodo(text: string) {
  this._todos.update(todos => {
    const updated = [...todos, { text, completed: false }];
    this.saveTodosToStorage(updated);
    return updated;
  });
}

    removeTodo(todoToRemove: Todo) {
  this._todos.update(todos => {
    const updated = todos.filter(todo => todo !== todoToRemove);
    this.saveTodosToStorage(updated);
    return updated;
  });
}

    updateTodoText(todoToUpdate: Todo, newText: string) {
        this._todos.update(todos => {
            const updated = todos.map(todo =>
                todo === todoToUpdate ? { ...todo, text: newText } : todo
            );
            this.saveTodosToStorage(updated);
            return updated;
        });
    }

    toggleTodo(todoToToggle: Todo) {
        this._todos.update(todos => {
            const updated = todos.map(todo =>
                todo === todoToToggle ? { ...todo, completed: !todo.completed } : todo
            );
            this.saveTodosToStorage(updated);
            return updated;
        });
    }
}