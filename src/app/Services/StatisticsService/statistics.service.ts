import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient, private cookie: CookieService) {
  }

  private url = Env.url;

  public GetCashbyMonth(year: number) {
    return this.http.get(`${this.url}/api/totalCashpermon/${year}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
  }

  public GetTurnover(year: number) {
    return this.http.get(`${this.url}/api/totalpermonth/${year}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.get(`${this.url}/api/modificateur`, {withCredentials: true});
  }

  public GetStatisticsPlats() {
    return this.http.get(`${this.url}/api/statisticplat`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public GetStatisticsPlatsByDate(date: any) {
    return this.http.post(`${this.url}/api/statisticplat`, date, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public NbrOfUsersConnected() {
    return this.http.get(`${this.url}/api/nbrOfUsersConnected`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public MostImportentClientBuyin() {
    return this.http.get(`${this.url}/api/mostImportentClientBuyin`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public userWithHistoric() {
    return this.http.get(`${this.url}/api/userWithHistoric`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public CAMensuel(debut: string, fin: string) {
    return this.http.get(`${this.url}/api/CAMensuel/${debut}/${fin}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public CAMAnnuel(year: number) {
    return this.http.get(`${this.url}/api/CAMAnnuel/${year}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public CountactiveCodes() {
    return this.http.get(`${this.url}/api/CountactiveCodes`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public CAOffreByMonthOfYear(year: string) {
    return this.http.get(`${this.url}/api/CAOffreByMonthOfYear/${year}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public QuantityOffreByYear(year: string) {
    return this.http.get(`${this.url}/api/QuantityOffreByYear/${year}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public nbrusecoderedbyyear(year: string) {
    return this.http.get(`${this.url}/api/nbrusecoderedbyyear/${year}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public nbrusecoderedbyyearbyuser(year: string) {
    return this.http.get(`${this.url}/api/nbrusecoderedbyyearbyuser/${year}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public getVisitors() {
    return this.http.get(`${this.url}/api/getVisitors`, { headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

}
