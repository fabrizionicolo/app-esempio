import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { prodotti } from '../../assets/prodotti';
import { ProdottoCarrello } from '../models/Prodotto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // esempio Subject per la visualizzazione del numero di elementi nel badge del bottone Carrello
  // sostitutivo del getCartLenght() interpolato direttamente nel html del bottone Carrello
  public cartSubject: Subject<boolean> = new Subject<boolean>();

  constructor() { }

  private prodottiNelCarrello: BehaviorSubject<ProdottoCarrello[]> = new BehaviorSubject<ProdottoCarrello[]>([]);
  public variabile = new BehaviorSubject<number>(0);

  public getCartLenght(): number {
    return this.prodottiNelCarrello.getValue().length;
  }

  public getProdottiCarrello(): Observable<ProdottoCarrello[]> {
    return this.prodottiNelCarrello.asObservable();
  }

  public addProdottoNelCarrello(id: number): boolean {
    try {
      let prodotto = this.prodottiNelCarrello.getValue().find(p => p.oggetto.id === id);
      if (prodotto)
        prodotto.quantitaCarrello++;
      else {
        let prodottoDaAggiungere = prodotti.find(p => p.id === id);
        if (prodottoDaAggiungere)
          this.prodottiNelCarrello.next(this.prodottiNelCarrello.getValue().concat({
            oggetto: prodottoDaAggiungere,
            quantitaCarrello: 1
          }));
      }
      return true;
    }
    catch {
      return false;
    }
  }

  public removeProdotto(id: number) {
    this.prodottiNelCarrello.next(this.prodottiNelCarrello.getValue().filter(p => p.oggetto.id !== id));
  }

  public svuotaCarrello(): void {
    this.prodottiNelCarrello.next([]);
    alert("Acquisto Effettuato con successo!");
  }
}
