import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GithubFormComponent } from './github-form/github-form.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { GithubRepoComponent } from './github-repo/github-repo.component';
import { DateCountPipe } from './date-count.pipe';
import { BolderDirective } from './bolder.directive';
=======

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './component/profile/profile.component';
import { FormComponent } from './form/form.component';
import { ReposComponent } from './component/repos/repos.component';
>>>>>>> 71bc884fb4cd0dae1862ff7747efa4cc7b3010a1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    GithubFormComponent,
    GithubProfileComponent,
    GithubRepoComponent,
    DateCountPipe,
    BolderDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
=======
    ProfileComponent,
    FormComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
>>>>>>> 71bc884fb4cd0dae1862ff7747efa4cc7b3010a1
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
