import { Component } from '@angular/core';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { Blogpost } from 'src/blog-interface';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css'],
})
export class PostlistComponent {
  constructor(private blogpostService: BlogpostService) {}

  blogposts: Blogpost[] = this.blogpostService.allBlogposts;
}
