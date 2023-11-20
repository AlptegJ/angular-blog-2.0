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
    if (this.storageService.getData('postKey') === null) {
      this.storageService.setData('postKey', Blogposts);
    }

    if (this.storageService.getProfile('profileKey') === null) {
      this.storageService.setProfile('profileKey', 'Admin');
    }
  }
}
