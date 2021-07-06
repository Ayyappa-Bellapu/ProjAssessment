import { Component, Input } from '@angular/core';
import { GitApiService } from '../git-api.service'
@Component({
  selector: 'results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent
{
  @Input() 
  list: any;
  constructor(private gitApiService: GitApiService) 
  {
  }
  ngOnInit(): void 
  {

  }

}
