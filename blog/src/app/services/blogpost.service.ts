import { Injectable } from '@angular/core';
import { Blogpost } from 'src/blog-interface';
import { StorageService } from './storage.service';
import { Blogposts } from 'src/blogpost-data';
import { BlogpostClass } from '../blogpost-class';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  PostList: Blogpost[] = [];
  constructor(private storageService: StorageService) {}

  allBlogposts: Blogpost[] = this.storageService.getData('postKey');

  getBlogpostById(id: number): any {
    return this.allBlogposts.find((blogpost) => blogpost.id === id);
  }

  getAllBlogposts(key: string): Blogpost[] {
    return this.storageService.getData(key);
  }

  submitPost(
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

  storeNewPost(post: Blogpost) {
    this.PostList = this.allBlogposts;
    this.PostList.push(post);
    this.storageService.setData('postKey', this.PostList);
  }
}
