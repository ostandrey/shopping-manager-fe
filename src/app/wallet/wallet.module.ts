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
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule} from '@angular/common/http';
import {WalletService} from './services/wallet-service';
import { AddWalletComponent } from './add-wallet/add-wallet.component';

@NgModule({
  declarations: [WalletListComponent,
    WalletListItemComponent,
    WalletDashboardComponent,
    WalletOverviewComponent,
    WalletIDComponent,
    AddTransactionComponent,
    AddWalletComponent
  ],
  entryComponents: [
    AddTransactionComponent
  ],
  exports: [
    WalletListComponent,
    WalletOverviewComponent,
    WalletDashboardComponent,
    AddTransactionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
    MatSortModule,
    MatTabsModule,
    HttpClientModule
  ],
  providers: [WalletService],
})
export class WalletModule { }
