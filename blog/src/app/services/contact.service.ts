import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor() {}

  submitMessage(
    firstName: string,
    lastName: string,
    email: string,
    message: string
  ) {
    console.log(firstName, lastName, email, message);
  }
}
