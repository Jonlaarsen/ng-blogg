import { Injectable } from '@angular/core';
import { Post } from './post';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  // public ApiPosts: Post[] = [];
  public localPosts: Post[] = [];

  constructor(private localStorage: StorageService) {
    // this.localStorage.loadApiPosts().then((posts) => (this.ApiPosts = posts));
    this.localPosts = this.localStorage.loadLocalPosts();
  }

  public get posts(): Post[] {
    return this.localPosts;
  }

  public addPost(title: string, body: string) {
    this.localPosts.unshift({
      id: this.localPosts.length + 1,
      title,
      body,
      thumbnailUrl:
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      creationDate: new Date(),
      likes: 0,
      dislikes: 0,
      comments: [],
    });
    this.localStorage.savePosts(this.localPosts);
  }

  public likePost(postId: number): void {
    for (let post of this.localPosts) {
      if (post.id === postId) {
        post.likes++;
      }
    }
    this.localStorage.savePosts(this.localPosts);
  }

  public dislikePost(postId: number): void {
    for (let post of this.localPosts) {
      if (post.id === postId) {
        post.dislikes++;
      }
    }
    this.localStorage.savePosts(this.localPosts);
  }

  public addComment(postId: number, comment: string): void {
    for (let post of this.localPosts) {
      if (post.id === postId) {
        post.comments.unshift(comment);
      }
      console.log(post.comments);
    }
    this.localStorage.savePosts(this.localPosts);
  }
  public deleteComment(postId: number, i: number): void {
    for (let post of this.localPosts) {
      if (post.id === postId) {
        post.comments.splice(i, 1);
      }
      this.localStorage.savePosts(this.localPosts);
    }
  }
}
