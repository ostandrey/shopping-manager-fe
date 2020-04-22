import { Component, OnInit } from '@angular/core';
import {WalletService} from '../services/wallet-service';
import {Observable} from 'rxjs';
import {AddWalletComponent} from '../add-wallet/add-wallet.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


interface IWalletListItem {
  id: number;
  title: string;
  type: string;
  balance: number;
}

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent implements OnInit {

  walletList: Observable<IWalletListItem[]>;

  constructor(private walletService: WalletService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.walletList = this.walletService.getAllWalletItems();
  }

  addWallet() {
    const dialogRef = this.dialog.open(AddWalletComponent, {
      data: { }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
