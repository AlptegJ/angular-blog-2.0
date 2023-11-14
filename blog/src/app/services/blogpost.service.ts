import { Injectable } from '@angular/core';
import { Blogposts } from 'src/blogpost-data';
import { Blogpost } from 'src/blog-interface';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  allBlogposts: Blogpost[] = Blogposts;
  constructor() {}

  getBlogpostById(id: number): any {
    return this.allBlogposts.find((blogpost) => blogpost.id === id);
  }
}
