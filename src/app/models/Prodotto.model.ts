export type ProdottoCarrello = {
  oggetto: Prodotto;
  quantitaCarrello: number;
}

export type Prodotto = {
  id: number;
  nome: string;
  descrizione?: string;
  categoria: categorie;
  prezzo: number;
  quantita: number;
}

export enum categorie {
  Tecnologia, //0
  CasaUfficio, //1
  Elettrodomestici //2
}
