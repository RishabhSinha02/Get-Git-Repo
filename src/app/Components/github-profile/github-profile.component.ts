import { Component, Input, OnChanges} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnChanges {

  @Input() username!: string


  data : any
  repos: any

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20 ];

  constructor(private user: GithubService ) {}
  
  ngOnChanges(): void {
    console.log(this.username)
    this.reset();
    this.dataList();
    this.repoList();
  }

  dataList():void{
    this.user.getData(this.username).subscribe((response)=>{
      this.data = response;
      console.log(this.data);
      console.log(this.data.public_repos);
    })
  }

  repoList():void{
    this.user.getRepo(this.username, this.page, this.tableSize).subscribe((response)=>{
      // this.user.getRepo(this.username).subscribe((response)=>{
      this.repos = response;
      console.log(this.repos)
      this.count = this.repos.total_count;
    })
  }
  
  onTableDataChange(event: any){
    this.page = event;
    this.repoList();
  }

  onTableSizeChange(event: any): void{
    this.tableSize = event.target.value;
    this.page =1;
    this.repos=null;
    this.repoList();
  }

  reset(){
    this.data=null;
    this.repos=null;
  }
 
}
