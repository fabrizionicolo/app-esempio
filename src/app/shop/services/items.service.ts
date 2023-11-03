import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/Item.model';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>("https://fakestoreapi.com/products?sort=desc");
  }

  public addNewItem(item: Item): Observable<Item> {
    return this.http.post<Item>("https://fakestoreapi.com/products", item);
  }
}

/* Generica risposta di un API reale..
  export interface Response<T> {
    data: T;
    ok: boolean;
    error: string;
  }
*/

/*
 ESEMPIO:
   public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>("https://fakestoreapi.com/products?sort=desc");
   }
*/
