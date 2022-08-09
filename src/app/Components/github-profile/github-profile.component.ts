import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  username : any
  data : any
  repos: any

  constructor(private user: GithubService ) {
    user.getData('OmkarPh').subscribe((data)=>{
      console.warn(data)
      this.data = data;
    })
    user.getRepo('OmkarPh').subscribe((repos)=>{
      console.warn(repos)
      this.repos= repos;
    })
  }
  ngOnInit(): void {
  }

}
