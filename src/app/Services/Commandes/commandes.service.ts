import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Env} from '../../Models/env';
import {Commande} from '../../Models/commande';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CommandesService {
  private url = Env.url;

  constructor(private http: HttpClient, private cookie: CookieService) { }
  public getAll() {
     return this.http.get(`${this.url}/api/commande`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.get(`${this.url}/api/commande`, {withCredentials: true});
  }

  public getById(commande_id: string) {
    return this.http.get(`${this.url}/api/commande/${commande_id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.get(`${this.url}/api/commande`, {withCredentials: true});
  }

  public updateCommand(cmd: Commande) {
     return this.http.put(`${this.url}/api/commande`, cmd, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.put(`${this.url}/api/commande`, cmd, { withCredentials: true});
  }

  public getId(id: string) {
    console.log(id);
    return this.http.get(`${this.url}/api/command_id/${id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.put(`${this.url}/api/commande`, cmd, { withCredentials: true});
  }
}
