import { Injectable, signal } from "@angular/core";

export interface Todo {
    text: string;
    completed: boolean;
}

@Injectable ({ providedIn: 'root'})
export class TodoService {
    private readonly _todos = signal<Todo[]>([
       { text: 'Precvičenie Angularu', completed: false },
       { text: 'Vytvoriť todo-list appku', completed: false } 
    ]);

    readonly todos = this._todos.asReadonly();

    addTodo(text: string) {
        this._todos.update(todos => [...todos, { text, completed: false }]);
    }

    removeTodo(todoToRemove: Todo) {
        this._todos.update(todos => todos.filter(todo => todo !== todoToRemove));
    }

    toggleTodo(todoToToggle: Todo) {
        this._todos.update(todos =>
            todos.map(todo =>
                todo === todoToToggle ? { ...todo, completed: !todo.completed} :todo
            )
        );
    }
}