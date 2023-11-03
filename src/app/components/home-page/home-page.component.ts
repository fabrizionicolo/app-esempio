import { Component, OnInit } from '@angular/core';
import { categorie, Prodotto } from '../../models/Prodotto.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  testoIniziale: string = "Benvenuto nel nostro E-Commerce!";
  
  ngOnInit(): void {    
  }

}
