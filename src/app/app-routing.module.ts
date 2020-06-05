import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WalletDashboardComponent} from './wallet/wallet-dashboard/wallet-dashboard.component';
import {WalletIDComponent} from './wallet/wallet-id/wallet-id.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth/auth.guard';

const routes: Routes = [
  { path: 'dashboard', component: WalletDashboardComponent, canActivate: [AuthGuard]},
  { path: 'dashboard/:walletId', component: WalletIDComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
