import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';
import {Reduction} from '../../Models/reduction';

@Injectable({
  providedIn: 'root'
})
export class ReductionService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private url = Env.url;

  public all() {
    return this.http.get(`${this.url}/api/codereduction`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public add(code: Reduction) {
    return this.http.post(`${this.url}/api/codereduction`, code, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public update(code: Reduction) {
    return this.http.put(`${this.url}/api/codereduction`, code, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public del(id: number) {
    return this.http.delete(`${this.url}/api/codereduction/${id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public affectUserToReduction(id_reduction: number, id_user) {
    return this.http.put(`${this.url}/api/affectcode/${id_reduction}/${id_user}`, '', { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
