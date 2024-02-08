import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CompanyDataService } from '../../services/company-data.service';
import { CompanyData } from '../../types/company-data';
import { Observable } from 'rxjs';
import { InvoiceService } from '../../services/invoice.service';
import { InvoiceItemModel } from '../../types/invoice-item.model';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrl: './invoice-preview.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvoicePreviewComponent implements OnInit {

  public companyData$: Observable<CompanyData> = this.companyDataService.fetchData().pipe(shareReplay(1));
  public invoiceItems: InvoiceItemModel[] = [];
  public invoiceSum: number = 0;

  constructor(
    private companyDataService: CompanyDataService,
    private invoiceService: InvoiceService) {
  }

  public ngOnInit() {
    this.invoiceItems = this.invoiceService.getItems();
    this.invoiceSum = this.invoiceService.countInvoiceSum();
  }
}
