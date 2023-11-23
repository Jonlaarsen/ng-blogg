import { Component } from '@angular/core';
import { Post } from 'src/app/services/post';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private postService: PostService) {}

  get posts(): Post[] {
    return this.postService.posts;
  }
}
