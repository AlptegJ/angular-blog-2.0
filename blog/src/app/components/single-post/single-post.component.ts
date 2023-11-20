import { Component } from '@angular/core';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { Blogpost } from 'src/blog-interface';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent {
  id: string = '';
  numId: number = 0;
  post: Blogpost;
  PostList: Blogpost[] = [];
  score: number = 0;

  constructor(
    private blogpostService: BlogpostService,
    private activatedRoute: ActivatedRoute,
    private storageService: StorageService
  ) {
    activatedRoute.params.subscribe((params) => (this.id = params['id']));
    this.post = this.blogpostService.getBlogpostById(parseInt(this.id));
    this.numId = parseInt(this.id);
    this.updateScore();
  }

  // + likes in posts (reders on page), get data from localStorage, updates data, saves to localStorage.
  like() {
    this.post.likes++;
    this.score++;
    this.PostList = this.blogpostService.allBlogposts;
    this.PostList[parseInt(this.id) - 1].likes = this.post.likes;
    this.storageService.setData('postKey', this.PostList);
  }

  // - likes in posts (reders on page), get data from localStorage, updates data, saves to localStorage.
  dislike() {
    this.post.dislikes++;
    this.score--;
    this.PostList = this.blogpostService.allBlogposts;
    this.PostList[parseInt(this.id) - 1].dislikes = this.post.dislikes;
    this.storageService.setData('postKey', this.PostList);
  }

  // updates score.
  updateScore() {
    this.score = this.post.likes - this.post.dislikes;
  }
}
