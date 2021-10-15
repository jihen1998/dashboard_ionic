import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Env} from '../../Models/env';
import {Modificateur} from '../../Models/modificateur';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ModificateurService {

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  private url = Env.url;

  public getAll() {
    return this.http.get(`${this.url}/api/modificateur`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
  }

  public addmodificateur(modif: Modificateur) {
    return this.http.post(`${this.url}/api/modificateur`, modif, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.post(`${this.url}/api/modificateur`, modif, {withCredentials: true});
  }

  public updatemodificateur(modif: Modificateur) {
    return this.http.put(`${this.url}/api/modificateur`, modif, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.put(`${this.url}/api/modificateur`, modif, {withCredentials: true});
  }

  public deletemodificateur(modif: number) {
    return this.http.delete(`${this.url}/api/modificateur/${modif}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.delete(`${this.url}/api/modificateur/${modif}`, { withCredentials: true});
  }

  public affectModifiToPlat(id_plat: number, id_modificateur: number) {
    return this.http.put(`${this.url}/api/affectModificateurToPlat/${id_plat}/${id_modificateur}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});

  }
}
