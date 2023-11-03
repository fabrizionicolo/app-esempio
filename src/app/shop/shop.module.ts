import { NgModule } from '@angular/core';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { SharedModule } from '../shared/shared.module';
import { ItemsService } from './services/items.service';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [
    ShopComponent,
    AddItemComponent
  ],
  imports: [
    ShopRoutingModule,
    SharedModule
  ],
  providers: [ItemsService]
})
export class ShopModule { }
