import { Component, Input } from '@angular/core';
import { Post } from 'src/app/services/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  @Input() post: Post = {} as Post;

  constructor(
    private postService: PostService,
    public userService: UserService
  ) {}

  sendComment(comment: string): void {
    this.postService.addComment(this.post.id, comment);
  }

  likeBtn(): void {
    this.postService.likePost(this.post.id);
  }

  dislikeBtn(): void {
    this.postService.dislikePost(this.post.id);
  }

  delete(i: number): void {
    this.postService.deleteComment(this.post.id, i);
  }
}
