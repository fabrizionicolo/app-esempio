import { categorie, Prodotto } from "../app/models/Prodotto.model";

export const prodotti: Prodotto[] = [
  {
    id: 1,
    nome: "Televisore",
    descrizione: "Samsung 55' Full HD",
    prezzo: 99.99,
    quantita: 10,
    categoria: categorie.Tecnologia
  },
  {
    id: 2,
    nome: "Lavastoviglie",
    descrizione: "Elettrolux",
    prezzo: 170,
    quantita: 20,
    categoria: categorie.Elettrodomestici
  },
  {
    id: 3,
    nome: "Lavatrice",
    descrizione: "Samsung, cap. 7Kg",
    prezzo: 159.99,
    quantita: 30,
    categoria: categorie.Elettrodomestici
  },
  {
    id: 4,
    nome: "PS5",
    descrizione: "Console gaming",
    prezzo: 10.7,
    quantita: 100,
    categoria: categorie.Tecnologia
  }
]
