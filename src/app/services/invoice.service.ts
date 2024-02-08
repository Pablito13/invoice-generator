import { Injectable } from '@angular/core';
import { InvoiceItemModel } from '../types/invoice-item.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoiceItems: InvoiceItemModel[] = [];

  constructor() { }

  public addItems(items:InvoiceItemModel[]) {
    this.invoiceItems.push(...items);
  }

  public getItems(): InvoiceItemModel[] {
    return this.invoiceItems.slice();
  }

  public countInvoiceSum(): number {
    return this.invoiceItems.reduce((sum, item) => sum + item.count * item.price, 0);
  }
}
