import { Component, OnInit } from '@angular/core';
import { GitApiService } from '../git-api.service';
@Component({
  selector: 'app-input',
  templateUrl: './inputSearch.component.html',
  styleUrls: ['./inputSearch.component.css']
})
export class InputSearchComponent implements OnInit 
{

  public searched: boolean
  public searchInput:any
  results:any
  
  constructor(private service:GitApiService)
   {
     this.searched = false
      this.searchInput=' '
   }

  ngOnInit(): void
  {

  }
   getResults()
   {
      this.service.get(this.searchInput).subscribe((res:any)=>
      {
         this.results=res.items
         console.log(this.results)
      })
    }  
 
}
