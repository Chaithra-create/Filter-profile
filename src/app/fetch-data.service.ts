import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  private url = 'https://randomuser.me/api/?results=20&inc=name,picture,id,cell&nat=in';

  constructor(private http:HttpClient) { }
  getdata() {
    return this.http.get(this.url)

  }
}
