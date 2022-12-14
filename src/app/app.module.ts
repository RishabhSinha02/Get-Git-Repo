import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NavbarComponent } from './Components/navbar/navbar.component';
import { GithubSearchComponent } from './Components/github-search/github-search.component';
import { GithubProfileComponent } from './Components/github-profile/github-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';

import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { IntercepterService } from './loader/intercepter.service';
import {MatIconModule} from '@angular/material/icon';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome"




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubSearchComponent,
    GithubProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: IntercepterService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
