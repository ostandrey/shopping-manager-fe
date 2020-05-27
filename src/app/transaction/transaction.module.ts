import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddTransactionComponent} from './add-transaction/add-transaction.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {TransactionService} from './services/transaction.service';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import {MatListModule} from '@angular/material/list';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { TransactionDeleteComponent } from './transaction-delete/transaction-delete.component';
import { TransactionEditComponent } from './transaction-edit/transaction-edit.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AddTransactionComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    TransactionDeleteComponent,
    TransactionEditComponent,
  ],
    imports: [
        CommonModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatTabsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatPaginatorModule
    ],
  exports: [
    AddTransactionComponent,
    TransactionListComponent,
  ],
  providers: [TransactionService]
})
export class TransactionModule { }
