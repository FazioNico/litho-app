import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsPageComponent } from './containers/items-page/items-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemDetailComponent } from './containers/item-detail/item-detail.component';

@NgModule({
  declarations: [
    ItemsPageComponent,
    ItemDetailComponent
  ],
  imports: [
    SharedModule,
    ItemsRoutingModule
  ],
})
export class ItemsModule { }
