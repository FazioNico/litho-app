import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService } from '../../services/items-service/items.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss'],
})
export class ItemDetailComponent implements OnInit {

  item$: Observable<any>;

  constructor(
    private _itemsService: ItemsService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    const { id = null } = this._route.snapshot.params;
    if (!id) return this._router.navigateByUrl('/items');
    this.item$ = this._itemsService.getItems().pipe(
      map(data => {
        const finded = data.find(el => el._id === id);
        return finded;
      })
    );
  }

}
