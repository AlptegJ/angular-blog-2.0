import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { SinglePostComponent } from './components/single-post/single-post.component';
import { AboutViewComponent } from './view/about-view/about-view.component';
import { ContactViewComponent } from './view/contact-view/contact-view.component';
import { MainViewComponent } from './view/main-view/main-view.component';
import { SinglePostViewComponent } from './view/single-post-view/single-post-view.component';
import { CommentComponent } from './components/comment/comment.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { NewPostViewComponent } from './view/new-post-view/new-post-view.component';
import { UserViewComponent } from './view/user-view/user-view.component';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    PostlistComponent,
    SinglePostComponent,
    AboutViewComponent,
    ContactViewComponent,
    MainViewComponent,
    SinglePostViewComponent,
    CommentComponent,
    NewPostComponent,
    NewPostViewComponent,
    UserViewComponent,
    UserComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
