import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';
import {RestaurantInfo} from '../../Models/restaurant-info';

@Injectable({
  providedIn: 'root'
})
export class RestaurantInfoService {

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  private url = Env.url;

  public all() {
    return this.http.get(`${this.url}/api/restau`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public myRestau() {
    return this.http.get(`${this.url}/api/myrestau`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public add(restau: RestaurantInfo) {
    return this.http.post(`${this.url}/api/restau`, restau, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public update(restau: RestaurantInfo) {
    return this.http.put(`${this.url}/api/restau`, restau, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public delete(restau: RestaurantInfo) {
    return this.http.delete(`${this.url}/api/restau/${restau.id}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public affectRestauToHoliday(idholiday: number, idRestaurantInfo: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.put(`${this.url}/api/affectRestauToHoliday/${idholiday}/${idRestaurantInfo}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public deleteRestauFromWorkTime(idWorkTime: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.put(`${this.url}/api/deleteRestauFromWorkTime/${idWorkTime}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public affectUserToRestau(user_id: number, restau_id: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.put(`${this.url}/api/affectUserToRestau/${user_id}/${restau_id}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public detachUserFromRestau(restau_id: number) {
    return this.http.put(`${this.url}/api/detachUserFromRestau/${restau_id}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public affectrestauinfoToTime(idschedule: number, idRestaurantInfo: number) {
    return this.http.put(`${this.url}/api/affectRestauToTime/${idschedule}/${idRestaurantInfo}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
  public detachRestauFromTime(idWorkTime: number) {
    return this.http.put(`${this.url}/api/deleteRestauFromTime/${idWorkTime}`, '', {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
