import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private contactService: ContactService) {}

  //sends value of inupt to contactService
  submitMessage() {
    this.contactService.submitMessage(
      this.contactForm.value.firstName ?? '',
      this.contactForm.value.lastName ?? '',
      this.contactForm.value.email ?? '',
      this.contactForm.value.message ?? ''
    );

    this.contactForm.reset();
  }
}
