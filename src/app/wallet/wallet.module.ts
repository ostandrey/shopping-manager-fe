import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletListComponent } from './wallet-list/wallet-list.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { WalletListItemComponent } from './wallet-list-item/wallet-list-item.component';



@NgModule({
  declarations: [WalletListComponent, WalletListItemComponent],
  exports: [
    WalletListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class WalletModule { }
