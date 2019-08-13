import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsPageComponent } from './containers/items-page/items-page.component';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ItemsPageComponent
      },
      {
        path: ':id',
        component: ItemDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
