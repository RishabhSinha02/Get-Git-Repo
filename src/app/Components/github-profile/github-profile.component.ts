import { Component, Input, OnChanges} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnChanges {

  @Input() username!: string

  repoFetching: boolean = false

  data : any
  repos: any

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20 ];

  constructor(private user: GithubService ) {}
  
  ngOnChanges(): void {
    this.repoFetching = true;
    this.page = 1;
    console.log(this.username)
    this.reset();
    this.dataList();
    this.listRepo()

  }

  dataList():void{
    this.user.getData(this.username).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
      console.log(this.data.public_repos);
      
    })
  }


  listRepo(){
    this.repoList();
  }

  repoList():void{
    this.user.getRepo(this.username, this.page, this.tableSize).subscribe((response)=>{
      this.repos = response;
      console.log(this.repos)
      this.count = this.repos.total_count;
      this.repoFetching = false;
    })
  }
  
  onTableDataChange(event: any){
    this.repos=null;
    $(window).scrollTop(0);
    this.page = event;
    this.repoList();
  }

  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page =1;
    this.repoList();
  }

  reset(){
    this.data=null;
    this.repos=null;
  }

  RepoLimiter(): number {
    if (this.repos.total_count! > 1000) {
      return (this.repos.total_count = 1000);
    }
    return this.repos.total_count;
  }
 
}
