import { Comment } from '../../models/comment';
import { CommentService } from './../../services/comment-service';
import { LoadingService } from '../../services/loading-service';
import { Component, inject, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-comment-list',
  imports: [],
  templateUrl: './comment-list.html',
  styleUrl: './comment-list.css',
})
export class CommentList {
  commentService = inject(CommentService);
  loadingService = inject(LoadingService);
  commentArr: WritableSignal<Comment[]> = signal([]);
  isLoading = signal(false);

  ngOnInit() {
    this.loadingService.loading$.subscribe(val => {
      this.isLoading.set(val);
    })

    this.commentService.getAllComments().subscribe((response: Comment[]) => {
      this.commentArr.set(response);
    });
  }
}