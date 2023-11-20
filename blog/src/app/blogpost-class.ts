export class BlogpostClass {
  //Properties
  public title: string;
  public thumbnailUrl: string;
  public body: string;
  public creationDate: Date;
  public likes: number;
  public dislikes: number;
  public comments: string[];
  public id: number;

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

  //method
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
