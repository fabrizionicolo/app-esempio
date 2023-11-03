import { AfterContentChecked, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

const MAX_NUM_CELLULARI = 3;

@Component({
  selector: 'app-acquista',
  templateUrl: './acquista.component.html',
  styleUrls: ['./acquista.component.scss']
})
export class AcquistaComponent implements OnInit, AfterContentChecked {

  @Input()
  totale: number = 0;

  @Output()
  acquistoEffetuato: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private fb: FormBuilder, private cgref: ChangeDetectorRef) { }

  acquistaForm = this.fb.group({
    intestatario: ["", Validators.required],
    numeroCarta: ["", [
      Validators.required,
      Validators.pattern("[0-9]{16}")
    ]],
    indirizzoSpedizione: this.fb.group({
      via: ["", Validators.required],
      civico: ["", [Validators.required, Validators.pattern("[0-9]{0,}")]],
      citta: ["", Validators.required]
    }),
    cellulari: this.fb.array([
      this.fb.control("", Validators.pattern("[0-9]{10}"))
    ]),
    // aggiungendo almeno un numero di cellulare, disabilitiamo la mail
    email: ["", Validators.email],
    // email: [{ value: "", disabled: true }, Validators.email],
    regalo: [false, Validators.required]
  });

  get intestatario() {
    return this.acquistaForm.get("intestatario");
  }

  getCellulari(): FormArray {
    return this.acquistaForm.get("cellulari") as FormArray;
  }

  addCellulare(): void {
    // aggiungo un campo al FormArray
    if ((<FormArray>this.acquistaForm.get("cellulari")).length <= MAX_NUM_CELLULARI)
      (<FormArray>this.acquistaForm.get("cellulari")).push(
        this.fb.control("", Validators.pattern("[0-9]{10}"))
      )
  }

  checkValidate(path: string): boolean | undefined {
    return !this.acquistaForm.get(path)?.valid &&
      this.acquistaForm.get(path)?.touched;
  }

  acquista(): void {
    // restituisce anche i campi disabilitati (es. email)
    console.log(this.acquistaForm.getRawValue());
    // restituisce solo i campi abilitati
    console.log(this.acquistaForm.value);
    this.acquistaForm.reset();
    this.acquistoEffetuato.emit(true);
  }

  ngAfterContentChecked(): void {
    this.cgref.detectChanges();
  }

  ngOnInit(): void {

    this.acquistaForm.controls.cellulari.valueChanges.subscribe(value => {
      if (value[0] && value[0].length == 10)
        this.acquistaForm.get("email")?.disable();
      else
        this.acquistaForm.get("email")?.enable();
    });

  }

}
