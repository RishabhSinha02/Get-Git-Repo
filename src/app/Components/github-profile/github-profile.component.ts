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

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20 ];

  constructor(private user: GithubService ) {}

  ngOnInit(): void {
    this.dataList();
    this.repoList();
  }

  dataList():void{
    this.user.getData('OmkarPh').subscribe((response)=>{
      this.data = response;
      console.log(this.data)
    })
  }

  repoList():void{
    this.user.getRepo('OmkarPh').subscribe((response)=>{
      this.repos = response;
      console.log(this.repos)
    })
  }
  
  onTableDataChange(event: any){
    this.page = event;
    this.repoList();
  }

  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page =1;
    this.repoList();
  }

}
