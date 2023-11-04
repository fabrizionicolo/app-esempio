import { Component, Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  showLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  show(): void {
    this.showLoader.next(true);
  }

  hide(): void {
    this.showLoader.next(false);
  }

  getShowLoader(): Observable<boolean> {
    return this.showLoader as Observable<boolean>;
  }
}
