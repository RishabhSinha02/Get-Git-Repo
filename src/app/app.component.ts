import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username!: string;
  title = 'get-git-repo';
  data : any

  SearchHandler(username: string){
    this.username = username;
    console.log(username)
  }
  
  constructor() {
  }

  
}
