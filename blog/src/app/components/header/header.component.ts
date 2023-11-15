import { Component } from '@angular/core';
import { BlogpostService } from 'src/app/services/blogpost.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  user: string = 'admin';

  constructor(
    private storageService: StorageService,
    private blogpostService: BlogpostService
  ) {}

  get() {
    console.log(this.storageService.getData('postKey'));
    console.log(this.blogpostService.allBlogposts);
  }
}
