import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  firstClick() {
    return console.log('clicked')
  }

  getUsers() {
    return this.http.get(this.url);
  }
}
