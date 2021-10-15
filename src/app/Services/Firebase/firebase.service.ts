import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Env} from '../../Models/env';
import {map} from 'rxjs/operators';
import {AngularFirestore} from 'angularfire2/firestore';
import {Commande} from '../../Models/commande';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient, private cookie: CookieService,
              private db: AngularFirestore) { }
  private url = Env.url;

  update(data: any) {
    return this.db
      .collection<any>('posts').doc(data.id).set({...data});
  }

  commandes() {
    return this.db
      .collection<any>('posts')
      .snapshotChanges()
      .pipe(
        map(action =>
          action.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id,  ...data };
          }),
        ),
      );
  }
}
