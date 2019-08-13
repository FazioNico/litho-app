import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private _http: HttpClient
  ) { }

  getItems() {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-access-token': (window as any).localStorage.getItem('ionic-demo-auth') || ''
      })
    };
    return this._http.get('https://guarded-savannah-51370.herokuapp.com/api/v2/items', httpOptions)
    .pipe(
      tap((res: {code: number, items: any[], token: string}) => (res.token)
        ? (window as any).localStorage.setItem('ionic-demo-auth', res.token)
        : null
      ),
      map((res: {code: number, items: any[], token: string}) => res.items || null),
      tap(data => console.log('GET: /items', data))
    );
  }
}
