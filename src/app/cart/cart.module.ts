import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { AcquistaComponent } from './components/acquista/acquista.component';


@NgModule({
  declarations: [
    CartComponent,
    AcquistaComponent
  ],
  imports: [
    CartRoutingModule,
    SharedModule,
    
  ]
})
export class CartModule { }
