import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { prodotti } from '../../../assets/prodotti';
import { Prodotto } from '../../models/Prodotto.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.scss']
})
export class DettaglioProdottoComponent implements OnInit {

  @Input()
  id: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService) { }

  prodotto: Prodotto | undefined;

  addOnCart(): void {
    if (!this.cartService.addProdottoNelCarrello(this.id)) {
      alert("Something went wrong!");
      return;
    }

    this.cartService.cartSubject.next(true);
  }

  ngOnInit(): void {
    // metodo scartato in quanto una volta mostrato il primo dettaglio, il componenente non viene più rinizializzato,
    // dunque non aggiorno il contenuto col nuovo prodotto
    /*if (this.activatedRoute.snapshot.params["id"]) {
      this.id = +this.activatedRoute.snapshot.params["id"];
      this.prodotto = prodotti.find(x => x.id === this.id);
    }*/

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = +params["id"];
        this.prodotto = prodotti.find(x => x.id === this.id);
      }
    )
  }

}
