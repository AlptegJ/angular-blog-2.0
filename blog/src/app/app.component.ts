import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';
import { Blogposts } from 'src/blogpost-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';
  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.storageService.setData('postKey', Blogposts);
  }
}
