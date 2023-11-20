import { Injectable } from '@angular/core';
import { Blogpost } from 'src/blog-interface';
import { StorageService } from './storage.service';
import { BlogpostClass } from '../blogpost-class';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  PostList: Blogpost[] = [];
  constructor(private storageService: StorageService) {}

  allBlogposts: Blogpost[] = this.storageService.getData('postKey');

  public getBlogpostById(id: number): any {
    return this.allBlogposts.find((blogpost) => blogpost.id === id);
  }

  public getAllBlogposts(key: string): Blogpost[] {
    return this.storageService.getData(key);
  }

  public submitPost(
    title: string,
    thumbnailUrl: string,
    body: string,
    creationDate: Date,
    likes: number,
    dislikes: number,
    comments: string[],
    id: number
  ) {
    let newBlogPost = new BlogpostClass(
      title,
      thumbnailUrl,
      body,
      creationDate,
      likes,
      dislikes,
      comments,
      id
    );

    this.storeNewPost(newBlogPost);
  }

  public storeNewPost(post: Blogpost) {
    this.PostList = this.allBlogposts;
    this.PostList.push(post);
    this.storageService.setData('postKey', this.PostList);
  }
}
