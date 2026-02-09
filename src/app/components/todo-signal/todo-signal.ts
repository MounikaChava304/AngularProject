import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo-service';

@Component({
  selector: 'app-todo-signal',
  imports: [],
  templateUrl: './todo-signal.html',
  styleUrl: './todo-signal.css',
})
export class TodoSignal {
  todoService = inject(TodoService)
  ngOnInit() {
   //This will load all todo's when the app is initialized
    this.todoService.loadTodos();
  }
}
