import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../../Models/user';
import {Env} from '../../Models/env';
import {Userswithhistoric} from '../../Models/userswithhistoric';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get userConnected(): User {
    return this._userConnected;
  }

  set userConnected(value: User) {
    this._userConnected = value;
  }

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private url = Env.url;
  private _userConnected = new User();
  public role: any[];
  public historique: Userswithhistoric[] = [];
  public signup(u: User) {
    return this.http.post(`${this.url}/api/register`, u);
  }
  public all() {
    return this.http.get(`${this.url}/api/users`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
