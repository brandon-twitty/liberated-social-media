import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminSdkService {
  userApi = ' https://us-central1-liberated-kind.cloudfunctions.net/api/users';
  user: User = new User();
  users: [];
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  public createUser(user: User) {
    JSON.stringify(user);
    console.log('service call to firebase', user);
    return this.http.post(`${this.userApi}`, user, this.httpOptions);
  }
  getAllUsers() {
    return this.http.get(`${this.userApi}`, this.httpOptions).subscribe(res => {
      console.log(res);
    });
  }
}
