import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletOverviewComponent } from './wallet-overview/wallet-overview.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';



@NgModule({
  declarations: [WalletOverviewComponent],
  exports: [
    WalletOverviewComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatInputModule
  ]
})
export class WalletOverviewModule { }
