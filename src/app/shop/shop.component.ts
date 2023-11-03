import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddItemComponent } from './components/add-item/add-item.component';
import { Item } from './models/Item.model';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  constructor(private itemService: ItemsService, private modalService: NgbModal) { }

  items: Item[] = [];

  addNewItem(): void {
    const modalRef = this.modalService.open(AddItemComponent);
    modalRef.closed.subscribe(
      (item: Item) => {
        this.itemService.addNewItem(item).subscribe(itemAdded => {
          // in un caso reale, avremmo ripreso la lista completa tramite la getItems, tuttavia, FAKEapi non aggiunge realmente il nostro item,
          // dunque, lo inseriamo noi manualmente in testa...
          this.items.unshift(itemAdded);
        })
      }
    )
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(response => {
      this.items = response;
    })
  }

}
