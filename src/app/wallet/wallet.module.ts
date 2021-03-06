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
import {FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule} from '@angular/common/http';
import {WalletService} from './services/wallet-service';
import { AddWalletComponent } from './add-wallet/add-wallet.component';
import {TransactionModule} from '../transaction/transaction.module';
import {MatMenuModule} from '@angular/material/menu';
import { DeleteWalletComponent } from './delete-wallet/delete-wallet.component';
import { EditWalletComponent } from './edit-wallet/edit-wallet.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTreeModule} from '@angular/material/tree';

@NgModule({
  declarations: [WalletListComponent,
    WalletListItemComponent,
    WalletDashboardComponent,
    WalletOverviewComponent,
    WalletIDComponent,
    AddWalletComponent,
    DeleteWalletComponent,
    EditWalletComponent
  ],
  exports: [
    WalletListComponent,
    WalletOverviewComponent,
    WalletDashboardComponent,
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
        HttpClientModule,
        TransactionModule,
        MatMenuModule,
        MatProgressSpinnerModule,
        MatTreeModule
    ],
  providers: [WalletService],
})
export class WalletModule { }
