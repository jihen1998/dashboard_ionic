import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';
import {Modificateur} from '../../Models/modificateur';
import {Offre} from '../../Models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  private url = Env.url;

  public All() {
    return this.http.get(`${this.url}/api/get/offre`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public add(offre: Offre) {
    return this.http.post(`${this.url}/api/offre`, offre, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public update(offre: Offre) {
    return this.http.put(`${this.url}/api/offres/${offre.id}`, offre, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public affectPlat(id_offre: number, id_plat: number) {
    return this.http.put(`${this.url}/api/offres/affect/${id_offre}/${id_plat}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public destroyPlat(id_offre: number, id_plat: number) {
    return this.http.put(`${this.url}/api/offres/destroy/${id_offre}/${id_plat}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public del(id: number) {
    return this.http.delete(`${this.url}/api/offres/${id}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
