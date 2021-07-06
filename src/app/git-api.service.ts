import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GitApiService 
{
 
  constructor(private http: HttpClient) { }

  get(keyword:any)
  {
    return this.http.get('http://api.github.com/search/repositories'+"?q="+keyword)
  }
}
