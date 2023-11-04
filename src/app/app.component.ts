import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { CartService } from './services/cart.service';
import { ProfileService } from './services/profile.service';
import { LoaderService } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(public authService: AuthService, public profileService: ProfileService, private cartService: CartService, public loaderService: LoaderService) {
    this.cartService.cartSubject.subscribe(
      next => this.numeroProdottiNelCarrello = this.cartService.getCartLenght()
    )

    this.loaderService.showLoader.subscribe( x => this.showLoader = x );
  }

  numeroProdottiNelCarrello: number = 0;
  showLoader: boolean = false;

  onLogout(): void {
    this.authService.loggout();
  }
}
