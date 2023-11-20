import { Injectable } from '@angular/core';
import { BlogpostService } from './blogpost.service';
import { Blogpost } from 'src/blog-interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  PostList: Blogpost[] = [];
  constructor(
    private blogpostService: BlogpostService,
    private storageService: StorageService
  ) {}

  public submitMessage(
    firstName: string,
    lastName: string,
    email: string,
    message: string
  ) {
    console.log(firstName, lastName, email, message);
  }

  public submitComment(comment: string, id: number) {
    this.PostList = this.blogpostService.allBlogposts;
    this.PostList[id - 1].comments.push(comment);
    console.log(comment);
    this.storageService.setData('postKey', this.PostList);
  }
}
