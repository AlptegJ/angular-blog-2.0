import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public profile: string = '';

  constructor(private storageService: StorageService) {
    this.currentProfile();
  }

  //gets currentProfile from localStorage
  currentProfile() {
    this.profile = this.storageService.getProfile('profileKey');
  }
}
