import { Component, Input, OnChanges} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnChanges {

  // take username from App-Component
  @Input() username!: string

  repoFetching: boolean = false
  profileFetching: boolean = false

  data : any
  repos: any

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20 ];

 // Injecting the Github Service
  constructor(private user: GithubService ) {}
  
  ngOnChanges(): void {
    this.repoFetching = true;    // for alert of 'no repo found'
    this.page = 1;      
    this.reset();        
    this.dataList();
    this.listRepo()

  }

  viewProfile(){
    this.dataList();
  }
  listRepo(){
    this.repoList();
  }


  dataList():void{
    this.user.getData(this.username).subscribe({
      next:(response) =>{
        this.data = response;
        this.profileFetching = false;
      },
      error: (err) => {
        this.profileFetching = true;
      },
    });
  }

  
  repoList():void{
    this.user.getRepo(this.username, this.page, this.tableSize).subscribe({
      next:(response) =>{
        this.repos = response;
      this.count = this.repos.total_count;
      this.repoFetching = false;
      },
      error: (err) => {
  
      },
    });
  }
  

 // To handle pagination on changing pages

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


  // As Github Api returns only first 1000 repositories, 
  // this fuctions is set the limit on Search of Repositories

  RepoLimiter(): number {
    if (this.repos.total_count! > 1000) {
      return (this.repos.total_count = 1000);
    }
    return this.repos.total_count;
  }
 
}
