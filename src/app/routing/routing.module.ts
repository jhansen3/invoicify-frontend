import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent }   from '../company/company.component';
import { CompanyFormComponent }   from '../company-form/company-form.component';
import { BillingRecordComponent }   from '../billing-record/billing-record.component';
import { InvoiceComponent }   from '../invoice/invoice.component';
import { UserComponent }   from '../user/user.component';
import { HomeComponent }   from '../home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'company',  component: CompanyComponent },
  { path: 'company/edit/:id', component: CompanyFormComponent },
  { path: 'company/add', component: CompanyFormComponent },
  { path: 'billing-record', component: BillingRecordComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'flat-fee/:id}', component: BillingRecordComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
