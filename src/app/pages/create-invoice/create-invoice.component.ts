import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InvoiceService } from '../../services/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateInvoiceComponent {
  private submitted: boolean = false;
  public invoiceForm: FormGroup = this.formBuilder.group({
    items: this.formBuilder.array([this.createItem()])
  });

  get items() {
    return this.invoiceForm.controls['items'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder,
              private invoiceService: InvoiceService,
              private router: Router) {
  }

  public onSubmit() {
    this.submitted = true;

    if (this.invoiceForm.valid && this.items.length > 0) {
      this.invoiceService.addItems(this.items.getRawValue());
      this.router.navigate(['/invoice-preview']);
    }
  }

  private createItem(): FormGroup  {
    return this.formBuilder.group({
      name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      count: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(100)]),
      price: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1_000_000)])
    });
  }

  public addNewItem() {
    this.items.push(this.createItem());
  }

  public deleteItem(index: number) {
    this.items.removeAt(index);
  }

  public hasError(idx: number, controlName: string, errorCode: string): boolean | undefined {
    return this.items.controls[idx].get(controlName)?.hasError(errorCode);
  }

  public isAddItemHintActive(): boolean {
    return this.submitted && this.items.length === 0;
  }
}
