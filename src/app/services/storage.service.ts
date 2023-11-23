import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  // public async loadApiPosts() {
  //   let result = await fetch('https://dummyjson.com/posts?limit=20');
  //   let json = await result.json();
  //   return json.posts;
  // }

  public loadLocalPosts(): Post[] {
    let posts = localStorage.getItem('posts');
    return !posts ? [] : JSON.parse(posts);
  }

  public savePosts(posts: Post[]): void {
    return localStorage.setItem('posts', JSON.stringify(posts));
  }
}
