import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProdottoCarrello } from '../models/Prodotto.model';
import { CartService } from '../services/cart.service';
import { ConfirmComponent } from '../shared/components/confirm/confirm.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  constructor(private cartService: CartService, private modalService: NgbModal) { }

  lista: ProdottoCarrello[] = [];
  subscription: Subscription | undefined;
  totale: number = 0;
  isCollapsed = true;

  removeItem(id: number): void {
    const modalRef = this.modalService.open(ConfirmComponent);
    modalRef.closed.subscribe(
      (choose: boolean) => {
        if (choose) {
          this.cartService.removeProdotto(id);
          this.cartService.cartSubject.next(true);
        }
      }
    )
  }

  onAcquista(): void {
    this.isCollapsed = true;
    this.cartService.svuotaCarrello();
    this.cartService.cartSubject.next(true);
  }

  ngOnInit(): void {
    this.subscription = this.cartService.getProdottiCarrello().subscribe(
      prodottiNelCarrello => {
        this.lista = prodottiNelCarrello;

        // nascondo il form di acquista (se aperto) quando elimino tutti gli elementi nel carrello
        if (this.lista.length <= 0)
          this.isCollapsed = true;

        this.totale = prodottiNelCarrello.reduce( (previousValue, currentValue) =>
            previousValue + (currentValue.oggetto.prezzo * currentValue.quantitaCarrello), 0
        );
        // altrimenti...
        //this.lista.forEach(item => this.totale += (item.oggetto.prezzo * item.quantitaCarrello));
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
