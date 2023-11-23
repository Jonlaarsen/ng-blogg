import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostArrayComponent } from './components/post-array/post-array.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { SingelPostComponent } from './views/singel-post/singel-post.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostArrayComponent,
    NewPostComponent,
    HomeComponent,
    AboutComponent,
    SingelPostComponent,
    PostCardComponent,
    ContactFormComponent,
  ],
  imports: [ReactiveFormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
