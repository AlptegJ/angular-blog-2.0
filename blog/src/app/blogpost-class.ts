import { Blogpost } from 'src/blog-interface';

export class BlogpostClass {
  //Properties
  title: string;
  thumbnailUrl: string;
  body: string;
  creationDate: Date;
  likes: number;
  dislikes: number;
  comments: string[];
  id: number;

  //Constructor
  constructor(
    title: string,
    thumbnailUrl: string,
    body: string,
    creationDate: Date,
    likes: number,
    dislikes: number,
    comments: string[],
    id: number
  ) {
    this.title = title;
    this.body = body;
    this.thumbnailUrl = thumbnailUrl;
    this.creationDate = creationDate;
    this.likes = likes;
    this.dislikes = dislikes;
    this.comments = comments;
    this.id = id;
  }

  getNewObject(): string {
    return `${this.title} 
    ${this.body} 
    ${this.thumbnailUrl}
    ${this.creationDate} 
    ${this.likes}
    ${this.dislikes}
    ${this.comments} 
    ${this.id}`;
  }
}
