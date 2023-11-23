import { Component, Input } from '@angular/core';
import { Post } from 'src/app/services/post';

@Component({
  selector: 'app-post-array',
  templateUrl: './post-array.component.html',
  styleUrls: ['./post-array.component.css'],
})
export class PostArrayComponent {
  @Input() post: Post = {} as Post;
}
