import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';
import {Holiday} from '../../Models/holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private url = Env.url;

  public all() {
    return this.http.get(`${this.url}/api/holiday`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public set(worktime: Holiday) {
    return this.http.post(`${this.url}/api/holiday`, worktime, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public edit(worktime: Holiday) {
    return this.http.put(`${this.url}/api/holiday`, worktime, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public del(id: number) {
    return this.http.delete(`${this.url}/api/holiday/${id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
