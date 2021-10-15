import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ingredient} from '../../Models/ingredient';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient, private cookie: CookieService) { }
  private url = Env.url;
  public getAll() {
    return this.http.get(`${this.url}/api/ingredientAll`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.get(`${this.url}/api/ingredient`, {withCredentials: true});
  }

  public addIngredient(ing: Ingredient) {
    return this.http.post(`${this.url}/api/ingredient`, ing, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.post(`${this.url}/api/ingredient`, ing, {withCredentials: true});
  }

  public updateingredient(ing: Ingredient) {
     return this.http.put(`${this.url}/api/ingredient`, ing, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
  }

  public deleteingredient(ing: number) {
     return this.http.delete(`${this.url}/api/ingredient/${ing}`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
   // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
  }

  public affectIngredientModificateur(modificateur_id: number, ingredient_id: number) {
    return this.http.put(`${this.url}/api/affectingredientmodificateur/${modificateur_id}/${ingredient_id}`, '', { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
  }

  public deleteIngredientFromModificateur(modificateur_id: number, ingredient_id: number) {
    return this.http.put(`${this.url}/api/deleteingredientmodificateur/${modificateur_id}/${ingredient_id}`, '', { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.put(`${this.url}/api/ingredient`, ing, {withCredentials: true});
  }

  public changeStatut(ing: Ingredient) {
    return this.http.put(`${this.url}/api/changeStatusingredient`, ing, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

}
