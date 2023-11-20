import { Component } from '@angular/core';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { Blogpost } from 'src/blog-interface';
import { Blogposts } from 'src/blogpost-data';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent {
  blogposts: Blogpost[] = [];

  constructor(private blogpostService: BlogpostService) {
    if (this.blogpostService.getAllBlogposts('postKey')) {
      this.blogposts = this.blogpostService.getAllBlogposts('postKey');
    } else {
      this.blogposts = Blogposts;
    }
  }
}
