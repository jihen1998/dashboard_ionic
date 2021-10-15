import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Env} from '../../Models/env';
import {Plat} from '../../Models/plat';
import {CookieService} from 'ngx-cookie-service';
import {Ingredient} from '../../Models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private url = Env.url;
  public getAll() {
    return this.http.get(`${this.url}/api/plat`);
   // return this.http.get(`${this.url}/api/plat`);
  }

  public addplat(plat: Plat) {
    return this.http.post(`${this.url}/api/plat`, plat, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.post(`${this.url}/api/plat`, plat, {withCredentials: true});
  }

  public updateplat(plat: Plat) {
    return this.http.put(`${this.url}/api/plat`, plat, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.put(`${this.url}/api/plat`, plat, {withCredentials:true});
  }

  public deleteplat(plat: number) {
    return this.http.delete(`${this.url}/api/plat/${plat}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.delete(`${this.url}/api/plat/${plat}`, {withCredentials: true});
  }

  public affectPlatModif(id_plat: number, id_modificateur: number) {
    return this.http.put(`${this.url}/api/affectModificateurToPlat/${id_plat}/${id_modificateur}`, '', { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public detachPlatFromModif(id_plat: number, id_modificateur: number) {
    return this.http.put(`${this.url}/api/detachModificateurFromPlat/${id_plat}/${id_modificateur}`, '', { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public changeStatut(plat: Plat) {
    return this.http.put(`${this.url}/api/changeStatusplat`, plat, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
