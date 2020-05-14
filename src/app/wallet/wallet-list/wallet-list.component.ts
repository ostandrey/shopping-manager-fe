import { Component, OnInit } from '@angular/core';
import {WalletService} from '../services/wallet-service';
import {AddWalletComponent} from '../add-wallet/add-wallet.component';
import {MatDialog} from '@angular/material/dialog';
import {first} from 'rxjs/operators';
import {UserService} from '../../user/user.service';


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

  walletList: IWalletListItem[];

  constructor(
    private userService: UserService,
    private walletService: WalletService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.getUser()
      .pipe(first())
      .subscribe(
        ({wallet, ...args}) => {
          this.walletList = wallet;
        }
      );
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
