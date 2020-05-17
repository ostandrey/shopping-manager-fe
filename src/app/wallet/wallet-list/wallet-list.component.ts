import { Component, OnInit } from '@angular/core';
import {WalletService} from '../services/wallet-service';
import {AddWalletComponent} from '../add-wallet/add-wallet.component';
import {MatDialog} from '@angular/material/dialog';
import {first} from 'rxjs/operators';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user';
import {Observable} from 'rxjs';
import {IWallet} from '../services/dataWallet/wallet.inteface';



@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent implements OnInit {

  walletList: IWallet[];

  constructor(
    private userService: UserService,
    private walletService: WalletService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.userService.user.subscribe(
      (data: User) => {
        this.walletList = data.wallet;
      }
    );
    this.userService.getUser();
  }

  addWallet() {
    const dialogRef = this.dialog.open(AddWalletComponent, {
      data: { }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.userService.getUser();
    });
  }
}
