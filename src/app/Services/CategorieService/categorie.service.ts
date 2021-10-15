import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Categorie} from '../../Models/categorie';
import {Env} from '../../Models/env';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url = Env.url;

  constructor(private http: HttpClient, private cookie: CookieService) { }
  public getAll() {
    return this.http.get(`${this.url}/api/categorie`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public addCateg(categ: Categorie) {
    return this.http.post(`${this.url}/api/categorie`, categ, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public editCateg(categ: Categorie) {
    return this.http.put(`${this.url}/api/categorie`, categ, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public deleteCateg(categ: Categorie) {
    return this.http.delete(`${this.url}/api/categorie/${categ.id}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public affectPlat(categ: Categorie, id_plat: number) {
    return this.http.put(`${this.url}/api/categorie/${categ.id}/${id_plat}`, categ, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public detachPlat(categ: Categorie, id_plat: number) {
    return this.http.put(`${this.url}/api/categorieDetachPlat/${categ.id}/${id_plat}`, categ, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
