import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './view/main-view/main-view.component';
import { AboutViewComponent } from './view/about-view/about-view.component';
import { ContactViewComponent } from './view/contact-view/contact-view.component';
import { SinglePostViewComponent } from './view/single-post-view/single-post-view.component';

const routes: Routes = [
  {
    path: '',
    component: MainViewComponent,
  },
  {
    path: 'about',
    component: AboutViewComponent,
  },
  {
    path: 'contact',
    component: ContactViewComponent,
  },
  {
    path: 'singlepost/:id',
    component: SinglePostViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
