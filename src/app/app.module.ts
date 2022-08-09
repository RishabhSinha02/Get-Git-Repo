import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { GithubSearchComponent } from './Components/github-search/github-search.component';
import { GithubProfileComponent } from './Components/github-profile/github-profile.component';
import { GithubReposComponent } from './Components/github-repos/github-repos.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchComponent,
    GithubProfileComponent,
    GithubReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
