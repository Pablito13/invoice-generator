import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrl: './add-invoice.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddInvoiceComponent implements OnInit {
  invoiceForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private invoiceService: InvoiceService,
              private router: Router) {

    this.invoiceForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.addNewItem();
  }

  onSubmit() {
    console.log(this.invoiceForm);
    if (this.items.length === 0) {

    } else if (this.invoiceForm.valid) {
      this.invoiceService.addItems(this.items.getRawValue());
      this.router.navigate(['/invoice-preview']);
    }
  }

  addNewItem() {
    const item = this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      count: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(100)]),
      price: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1_000_000)])
    });
    this.items.push(item);
  }

  deleteItem(index: number) {
    this.items.removeAt(index);
  }

  get items() {
    return this.invoiceForm.controls['items'] as FormArray;
  }

  hasError(idx: number, controlName: string, errorCode: string): boolean | undefined {
    console.log(`hasError check for ${idx}`);
    return this.items.controls[idx].get(controlName)?.hasError(errorCode);
  }
}
