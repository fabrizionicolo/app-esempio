import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PricePipe } from './pipes/price.pipe';
import { CutTextPipe } from '../pipes/cut-text.pipe';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    ConfirmComponent,
    PricePipe,
    CutTextPipe,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [
    ConfirmComponent,
    PricePipe,
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    CutTextPipe,
    LoaderComponent
  ]
})
export class SharedModule { }
