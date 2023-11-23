import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SingelPostComponent } from './views/singel-post/singel-post.component';
import { AboutComponent } from './views/about/about.component';
import { NewPostComponent } from './components/new-post/new-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/:id', component: SingelPostComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create', component: NewPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
