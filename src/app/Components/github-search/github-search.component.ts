import { Component, EventEmitter, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

// To flow the data from child to parent i.e main App-component
  @Output() onSearchUser: EventEmitter<any> = new EventEmitter();
  public inputGithubUser: string = '';
  

  constructor() { }

  public searchUser(){
    this.onSearchUser.emit(this.inputGithubUser);
    this.inputGithubUser = '';
    
  }

  ngOnInit(): void {
  }

}
