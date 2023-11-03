import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  form: FormGroup = new FormGroup({
    title: new FormControl("", Validators.required),
    price: new FormControl(null, [Validators.required, Validators.min(0.01)]),
    description: new FormControl(""),
    category: new FormControl("", Validators.required),
    image: new FormControl(null),
    rating: new FormGroup({
      rate: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required)
    })
  });

  onSave(): void {
    this.activeModal.close(this.form.getRawValue());
  }

  ngOnInit(): void {
  }

}
