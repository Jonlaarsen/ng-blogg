import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  constructor(private postService: PostService) {}

  addPost(title: string, body: string): void {
    this.postService.addPost(title, body);
  }
}
