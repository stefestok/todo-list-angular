import { Routes } from '@angular/router';
import { TodoList } from './components/todo-list/todo-list/todo-list';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
    {path: '', component: TodoList},
    {path: '', component: About},
    {path: '', component: NotFound}
];
