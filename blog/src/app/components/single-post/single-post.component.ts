import { Component } from '@angular/core';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { Blogpost } from 'src/blog-interface';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Blogposts } from 'src/blogpost-data';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent {
  id: string = '';
  post: Blogpost;
  score: number = 0;
  idNum: number = 0;

  constructor(
    private blogpostService: BlogpostService,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
  ) {
    activatedRoute.params.subscribe((params) => (this.id = params['id']));
    this.idNum = parseInt(this.id);
    this.post = this.blogpostService.getBlogpostById(this.idNum);
  }

  like() {
    this.post.likes++;
    this.blogpostService.getBlogpostById(parseInt(this.id)).likes =
      this.post.likes;
    this.storageService.setData('1', Blogposts);
    this.score++;
  }
  dislike() {
    this.post.dislikes--;
    this.storageService.setData('1', Blogposts);
    this.score--;
  }
}
