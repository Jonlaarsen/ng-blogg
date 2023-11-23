import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/services/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-singel-post',
  templateUrl: './singel-post.component.html',
  styleUrls: ['./singel-post.component.css'],
})
export class SingelPostComponent {
  id: number = -1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    activatedRoute.params.subscribe(
      (params) => (this.id = parseInt(params['id']))
    );
  }

  get post(): Post | undefined {
    return this.postService.posts.find((all) => all.id === this.id);
  }
}
