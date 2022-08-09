import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  // for github profile

  getData(username: string){
    let url = `https://api.github.com/users/${username}`;
    return this.httpClient.get(url);
  }

  getRepo(username: string){
    let url = `https://api.github.com/users/${username}/repos`;
    return this.httpClient.get(url);
  }
  //for github repositories 
  
}
