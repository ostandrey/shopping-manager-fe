import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WalletDashboardComponent} from './wallet/wallet-dashboard/wallet-dashboard.component';
import {AppComponent} from './app.component';
import {WalletIDComponent} from './wallet/wallet-id/wallet-id.component';

const routes: Routes = [
  { path: 'dashboard', component: WalletDashboardComponent},
  { path: 'dashboard/:walletId', component: WalletIDComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
