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


  // For getting repositories of GitHub User 

    getRepo(username: string, page: number, per_page: number){
    let url = `https://api.github.com/search/repositories?q=user:${username} in:name sort:updated-asc&page=${page}&per_page=${per_page}`;
    return this.httpClient.get(url);
  }
 
  
}
