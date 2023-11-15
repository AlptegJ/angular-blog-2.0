import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogpostService } from 'src/app/services/blogpost.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css'],
})
export class NewPostComponent {
  newPostForm = new FormGroup({
    title: new FormControl(''),
    thumbnailUrl: new FormControl(''),
    body: new FormControl(''),
  });

  constructor(private blogpostService: BlogpostService) {}

  submitPost() {
    this.blogpostService.submitPost(
      this.newPostForm.value.title ?? '',
      this.newPostForm.value.thumbnailUrl ?? '',
      this.newPostForm.value.body ?? '',
      new Date(),
      0,
      0,
      [],
      this.blogpostService.allBlogposts.length + 1
    );
  }
}
