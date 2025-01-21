import { Component, OnInit, Signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { addTodo } from '../../store/todo.actions';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../store/todo.model';
import { AppState } from '../../store/state';
import { todoSelector } from '../../store/todo.selector';
import * as TodoActions from '../../store/todo.actions';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-todo',
  imports: [ FormsModule, NgIf, NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  todos$: Signal<Todo[] | undefined>;
  isLoading$: Signal<boolean | undefined>;

  constructor(private store: Store<AppState>) {
    this.todos$ = toSignal(this.store.select(todoSelector)); // observable converted to signal
    this.isLoading$ = toSignal(this.store.select((state) => state.todo.loading));
    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(TodoActions.loadTodos());
  }

  addTodo(index: number) {
    const todo: Todo = { id: index, description: `description ${index}`, completed: false };
    this.store.dispatch(TodoActions.addTodo({ todo }));
  }

  complete(todo: Todo) {
    this.store.dispatch(
      TodoActions.updateTodo({ todo: { ...todo, completed: true } })
    );
  }
}

