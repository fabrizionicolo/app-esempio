import { AfterContentChecked, AfterViewChecked, OnDestroy, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { OnChanges } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AfterContentInit, DoCheck, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Amministratore, Operatore } from '../assets/profili';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { ProfileService } from './services/profile.service';
import { LoaderService } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService, public profileService: ProfileService, private cartService: CartService,
    public loaderService: LoaderService) { }

  numeroProdottiNelCarrello: number = 0;

  onLogout(): void {
    this.authService.loggout();
  }

  ngOnInit(): void {
    this.cartService.cartSubject.subscribe(
      next => this.numeroProdottiNelCarrello = this.cartService.getCartLenght()
    )
  }
}
