import { Injectable } from '@angular/core';
import { InvoiceItemModel } from './models/invoice-item.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceItems: InvoiceItemModel[] = [];

  constructor() { }

  addItems(items:InvoiceItemModel[]) {
    this.invoiceItems.push(...items);
  }

  getItems(): InvoiceItemModel[] {
    return this.invoiceItems.slice();
  }

  countInvoiceSum(): number {
    return this.invoiceItems.reduce((sum, item) => sum + item.count * item.price, 0);
  }
}
