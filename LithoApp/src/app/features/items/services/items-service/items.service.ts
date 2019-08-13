import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    private _http: HttpClient
  ) { }

  getItems() {
    return this._http.get('https://guarded-savannah-51370.herokuapp.com/api/v2/items')
    .pipe(
      map((res: {code: number, items: any[]}) => res.items || null),
      tap(data => console.log('GET: /items', data))
    );
  }
}
