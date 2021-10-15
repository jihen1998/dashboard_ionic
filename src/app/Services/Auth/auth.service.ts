import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  get isloggedin(): boolean {
    return this._isloggedin;
  }

  set isloggedin(value: boolean) {
    this._isloggedin = value;
  }

  private url = Env.url;
  private _isloggedin: boolean;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  public login(coordonnees: any) {
    return this.http.post(`${this.url}/api/loginadmin`, coordonnees, {withCredentials: true});
  }

  public connected() {
    return this.http.get(`${this.url}/api/connected`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.get(`${this.url}/api/connected`, {withCredentials: true});

  }

  public logout() {
    return this.http.post(`${this.url}/api/logout`, '', { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.post(`${this.url}/api/logout`, '', {withCredentials: true});
  }

  public incrementVisitors() {
    return this.http.get(`${this.url}/api/incrementVisitors`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public decrementVisitors() {
    return this.http.get(`${this.url}/api/decrementVisitors`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

}
