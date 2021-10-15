import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';

@Injectable({
  providedIn: 'root'
})
export class StripeService {

  constructor(private http: HttpClient, private cookie: CookieService) { }

  private url = Env.url;
  public GetTransactions() {
    return this.http.get(`${this.url}/api/stripe`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
  }

  public Getcharges() {
    return this.http.get(`${this.url}/api/stripecharges`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
  }
}
