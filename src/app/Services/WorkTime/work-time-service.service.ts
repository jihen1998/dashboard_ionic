import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';
import {User} from '../../Models/user';
import {WorkTimes} from '../../Models/work-times';

@Injectable({
  providedIn: 'root'
})
export class WorkTimeServiceService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private url = Env.url;

  public all() {
    return this.http.get(`${this.url}/api/worktime`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwt')}});
  }

  public set(worktime: WorkTimes) {
    return this.http.post(`${this.url}/api/worktime`, worktime, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwt')}});
  }

  public edit(worktime: WorkTimes) {
    return this.http.put(`${this.url}/api/worktime`, worktime, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwt')}});
  }

  public del(id: number) {
    return this.http.delete(`${this.url}/api/worktime/${id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwt')}});
  }
}
