import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
import { Blogpost } from 'src/blog-interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent {
  @Input() receivedData: string[] = [];
  @Input() id: number = 0;
  @Input() post!: Blogpost;

  commentForm = new FormGroup({
    comment: new FormControl(''),
  });

  constructor(private contactService: ContactService) {}

  //sends value of inupt to contactService
  submitComment() {
    this.contactService.submitComment(
      this.commentForm.value.comment ?? '',
      this.id
    );

    this.commentForm.reset();
    window.location.reload();
  }
}
