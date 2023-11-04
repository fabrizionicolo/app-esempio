import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  numeroProdottiNelCarrello: number = 0;
  showLoader: boolean = true;

  constructor(public authService: AuthService,
    public profileService: ProfileService,
    private cartService: CartService,
    public loaderService: LoaderService,
    private cf: ChangeDetectorRef
  ) {
    this.cartService.cartSubject.subscribe(
      next => this.numeroProdottiNelCarrello = this.cartService.getCartLenght()
    )
  }

  ngOnInit(): void {
    this.loaderService.showLoader.subscribe( x => {
      this.showLoader = x;
      // necessario in quanto modifichiamo un valore solo che è stato verificato il contenuto nel DOM, dunque richiamiamo il changeDetector forzatamente
      // NT: era possibile risolvere il problema rendendo il codice asincrono (commenta il detectChanges per vedere l'errore)
      this.cf.detectChanges();
    });
  }

  onLogout(): void {
    this.authService.loggout();
  }
}
