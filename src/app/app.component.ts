import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  username : any
  title = 'get-git-repo';
  data : any
  
  constructor(private user: GithubService ) {
    user.getData('RishabhSinha02').subscribe((data)=>{
      console.warn(data)
      this.data = data;
    })
  }
}
