import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {  AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import { DateCountPipe } from './date-count.pipe';
 

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { ProfileComponent } from './component/profile/profile.component';
// import { FormComponent } from './form/form.component';
// import { ReposComponent } from './component/repos/repos.component';


@NgModule({
  declarations: [
    AppComponent,

    GithubFormComponent,
    GithubProfileComponent,
    GithubRepoComponent,
    DateCountPipe,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
    // AppRoutingModule
    // ProfileComponent,
    // FormComponent,
    // ReposComponent
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule

  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
