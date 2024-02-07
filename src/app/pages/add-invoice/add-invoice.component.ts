import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddInvoiceComponent implements OnInit{
  invoiceForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.invoiceForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.addNewItem();
  }

  onSubmit() {
    console.log(this.invoiceForm);
  }

  addNewItem() {
    const item = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      count: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(100)]),
      price: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(1_000_000)])
    });
    this.items.push(item);
  }

  deleteItem(index: number) {
    this.items.removeAt(index);
  }

  get items() {
    return this.invoiceForm.controls['items'] as FormArray;
  }
}
