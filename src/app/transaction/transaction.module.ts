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



@NgModule({
  declarations: [
    AddTransactionComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  exports: [
    AddTransactionComponent
  ],
  providers: [TransactionService]
})
export class TransactionModule { }
