import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { prodotti } from '../../../assets/prodotti';
import { Prodotto } from '../../models/Prodotto.model';

@Component({
  selector: 'app-lista-prodotti',
  templateUrl: './lista-prodotti.component.html',
  styleUrls: ['./lista-prodotti.component.scss']
})
export class ListaProdottiComponent implements OnInit {

  prodotti: Prodotto[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  goToDetail(id: number, cat: number): void {
    this.router.navigate(
      ["detail", id, { categoria: cat, saluto: "ciao" }],
      { relativeTo: this.activatedRoute }
    );
  }

  ngOnInit(): void {
    this.prodotti = prodotti;
  }

}
