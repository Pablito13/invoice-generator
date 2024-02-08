import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../company-data.service';
import { CompanyDataModel } from '../../models/company-data.model';
import { Observable } from 'rxjs';
import { InvoiceService } from '../../invoice.service';
import { InvoiceItemModel } from '../../models/invoice-item.model';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicePreviewComponent implements OnInit {

  companyData$: Observable<CompanyDataModel> = this.companyDataService.fetchData();
  invoiceItems?: InvoiceItemModel[];
  invoiceSum?: number;

  constructor(
    private companyDataService: CompanyDataService,
    private invoiceService: InvoiceService) {
  }

  ngOnInit() {
    this.invoiceItems = this.invoiceService.getItems();
    this.invoiceSum = this.invoiceService.countInvoiceSum();
  }
}
