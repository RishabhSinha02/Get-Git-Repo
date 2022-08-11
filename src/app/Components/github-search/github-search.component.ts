import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  @Output() onSearchUser: EventEmitter<any> = new EventEmitter();
  public inputGithubUser: string | undefined;
  

  constructor() { }

  public searchUser(){
    console.log(this.inputGithubUser);
    this.onSearchUser.emit(this.inputGithubUser);
    this.inputGithubUser = '';
    
  }

  ngOnInit(): void {
  }

}
