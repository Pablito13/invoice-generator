import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInvoiceComponent } from './pages/add-invoice/add-invoice.component';
import { InvoicePreviewComponent } from './pages/invoice-preview/invoice-preview.component';

const routes: Routes = [
  {path: '', redirectTo: '/new-invoice', pathMatch: 'full'},
  {path: 'new-invoice', component: AddInvoiceComponent},
  {path: 'invoice-preview', component: InvoicePreviewComponent},
  {path: '**', redirectTo: '/new-invoice', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
