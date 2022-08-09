import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  public inputGithubUser: string | undefined;
  constructor() { }

  public searchUser(){
    
  }

  ngOnInit(): void {
  }

}
