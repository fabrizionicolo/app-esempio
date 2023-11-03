import { Component, Injectable, OnInit } from '@angular/core';

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

  showLoader: boolean = false;

  show(): void {
    this.showLoader = true;
  }

  hide(): void {
    this.showLoader = false;
  }

  getShowLoader(): boolean {
    return this.showLoader;
  }
}
