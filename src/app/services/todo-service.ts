import { computed, inject, Injectable, signal } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:3000/todos';
  httpClient = inject(HttpClient);

  //Signal for todo array
  todos = signal<Todo[]>([]);

  // Computed signals which shows completed and pending tasks
  completedToDos = computed(() => this.todos().filter(t => t.completed));
  remainingToDos = computed(() => this.todos().filter(t => !t.completed));

  // Fetch todos from localhost using json-server url
  loadTodos() {
    this.httpClient.get<Todo[]>(this.apiUrl).subscribe({
      next: todos => this.todos.set(todos),
      error: err => console.error('Failed to load todos', err)
    });
  }

  // If clicked on toggle button on UI, the status of the task will be changed accordingly using update
  toggleTodo(id: number) {
    this.todos.update(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // If clicked on delete button on UI, the task will be deleted also using update
  deleteTodo(id: number) {
    this.todos.update(todos =>
      todos.filter(todo => todo.id !== id)
    );
  }
}
