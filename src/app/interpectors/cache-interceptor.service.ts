import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from "rxjs/operators";

@Injectable()
export class CacheInterceptorService implements HttpInterceptor {

  constructor() { }

  cache: Map<string, any> = new Map<string, any>();

  private isCacheable(req: HttpRequest<any>): boolean {
    return req.method !== "GET";
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // salvo solo per le GET
    if (!this.isCacheable(req))
      return next.handle(req);

    // controllo che la request faccia parte delle get da memorizzare
    if (!urls.some((url) => req.url.includes(url)))
      return next.handle(req);

    // se è stata già memorizzata, non eseguo la request ma restituisco il valore tramite un observable
    if (this.cache.get(req.url) != null)
      return of(this.cache.get(req.url));

    // siamo nel caso di una GET non ancora memorizzata nella cache
    return next.handle(req).pipe(
      delay(1500),
      tap(event => {
        if (event instanceof HttpResponse) {
          // salvo in cache
          this.cache.set(req.url, event);
        }
      })
    );
  }

}

const urls = ["products", "categories"]
