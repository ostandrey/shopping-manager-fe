import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { WalletListItemComponent } from './wallet-list-item/wallet-list-item.component';
import { WalletDashboardComponent } from './wallet-dashboard/wallet-dashboard.component';
import { WalletOverviewComponent } from './wallet-overview/wallet-overview.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import { WalletIDComponent } from './wallet-id/wallet-id.component';



@NgModule({
  declarations: [WalletListComponent, WalletListItemComponent, WalletDashboardComponent, WalletOverviewComponent, WalletIDComponent],
  exports: [
    WalletListComponent,
    WalletOverviewComponent,
    WalletDashboardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ]
})
export class WalletModule { }
