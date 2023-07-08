import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  // private url = 'https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in';
  private url = 'https://random-data-api.com/api/v2/users?size=15&response_type=json';
  constructor(private http:HttpClient) { }
  getdata() {
    return this.http.get(this.url)

  }
}
