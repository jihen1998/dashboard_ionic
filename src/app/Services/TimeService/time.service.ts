import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';
import {Time} from '../../Models/time';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private url = Env.url;

  public all() {
    return this.http.get(`${this.url}/api/time`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public set(worktime: Time) {
    return this.http.post(`${this.url}/api/time`, worktime, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public edit(worktime: Time) {
    return this.http.put(`${this.url}/api/time`, worktime, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public del(id: number) {
    return this.http.delete(`${this.url}/api/time/${id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
