import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items-service/items.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-items-page',
  templateUrl: './items-page.component.html',
  styleUrls: ['./items-page.component.scss'],
})
export class ItemsPageComponent implements OnInit {

  items$: Observable<any>;

  constructor(
    private _itemsService: ItemsService
  ) { }

  ngOnInit() {
    this.items$ = this._itemsService.getItems();
  }

  search($event) {
    console.log($event.detail.value);
    this.items$ = this._itemsService.getItems().pipe(
      map(items => {
        return items.filter(i =>
          i.name.toLowerCase().includes($event.detail.value.toLowerCase()) ||
          i.color.toLowerCase().includes($event.detail.value.toLowerCase()) ||
          i.desc.toLowerCase().includes($event.detail.value.toLowerCase())
        );
      })
    );
  }
}
