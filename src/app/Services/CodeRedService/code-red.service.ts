import { Injectable } from '@angular/core';
import {Env} from '../../Models/env';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {CodeReduction} from '../../Models/code-reduction';

@Injectable({
  providedIn: 'root'
})
export class CodeRedService {

  private url = Env.url;
  constructor(private http: HttpClient, private cookie: CookieService) { }
  public getAll() {
    return this.http.get(`${this.url}/api/codereduction`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public add(code: CodeReduction) {
    return this.http.post(`${this.url}/api/codereduction`, code, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public update(code: CodeReduction) {
    return this.http.put(`${this.url}/api/codereduction`, code, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public delete(code: CodeReduction) {
    return this.http.delete(`${this.url}/api/codereduction/${code.id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  // returns a boolean (if sysdate < expiration date) returns true
  public verifyDate(id: number) {
    return this.http.get(`${this.url}/api/codereduction/${id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public affectUserToReduction(id_reduction: number, id_user) {
    return this.http.put(`${this.url}/api/affectcode/${id_reduction}/${id_user}`, '', { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

}
