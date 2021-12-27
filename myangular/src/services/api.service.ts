import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  
@Injectable({
  providedIn: 'root'
})

export class ApiService {
    
  constructor(private httpClient: HttpClient) { }
  
  public fetchFromServer(url:any) {
    return this.httpClient.get(url);
  }

  public postToServer(url:any, post_data:any) {
      return  this.httpClient.post(url, post_data)
  }

  public deleteInServer(url:any, id:any) {
    if(id)
        url = url + '/' + id + '/';
    return  this.httpClient.delete(url)
}
  
}