import { Injectable } from '@angular/core';
import { Blogpost } from 'src/blog-interface';
import { StorageService } from './storage.service';
import { Blogposts } from 'src/blogpost-data';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  PostList: Blogpost[] = [];
  newPost!: Blogpost;
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
    // this.PostList = this.allBlogposts;
    // this.newPost.title = title;
    // this.newPost.body = body;
    // this.newPost.thumbnailUrl = thumbnailUrl;
    // this.newPost.creationDate = creationDate;
    // this.newPost.likes = likes;
    // this.newPost.dislikes = dislikes;
    // this.newPost.comments = comments;
    // this.newPost.id = id;
    // this.PostList.push(this.newPost);
    console.log(
      title,
      body,
      thumbnailUrl,
      creationDate,
      likes,
      dislikes,
      comments,
      id
    );
  }
}
