import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { delay, finalize } from "rxjs/operators";
import { LoaderService } from "../shared/components/loader/loader.component";

@Injectable()
export class LoaderInterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (req.method !== "GET")
      return next.handle(req);

    this.loaderService.show();
    return next.handle(req).pipe(
      delay(1500),
      finalize(() => this.loaderService.hide())
     );
  }
}
