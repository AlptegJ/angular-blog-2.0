import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  constructor(private storagreService: StorageService) {}

  setUser() {
    this.storagreService.setProfile('profileKey', 'User');
    window.location.reload();
  }
  setAdmin() {
    this.storagreService.setProfile('profileKey', 'Admin');
    window.location.reload();
  }
}
