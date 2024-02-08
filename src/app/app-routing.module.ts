import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './pages/add-invoice/add-invoice.component';
import { InvoicePreviewComponent } from './pages/invoice-preview/invoice-preview.component';

const routes: Routes = [
  {path: '', component: AddInvoiceComponent},
  {path: 'invoice-preview', component: InvoicePreviewComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
