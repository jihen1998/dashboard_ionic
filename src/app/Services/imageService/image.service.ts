import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private url = Env.url;

  constructor(private http: HttpClient, private cookie: CookieService) { }

  public uploadimg(img: FormData) {
    return this.http.post(`${this.url}/api/image-upload`, img, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
    // return this.http.put(`${this.url}/api/commande`, cmd, { withCredentials: true});
  }

  public addPlatimg(image: any, idplat: number) {
    return this.http.post(`${this.url}/api/plat/${idplat}/image`, image,{headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }

  public deleteimg(id: number) {
    return this.http.delete(`${this.url}/api/image/${id}`, {headers: {Authorization: 'Bearer ' + this.cookie.get('jwtadmin')}});
  }
}
