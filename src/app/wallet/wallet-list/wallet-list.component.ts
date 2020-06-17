import { Component, OnInit } from '@angular/core';
import {WalletService} from '../services/wallet-service';
import {AddWalletComponent} from '../add-wallet/add-wallet.component';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user';
import {IWallet} from '../services/dataWallet/wallet.inteface';

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent implements OnInit {

  walletList: IWallet[];
  // tslint:disable-next-line:variable-name
  _walletsContainer: HTMLElement;
  // tslint:disable-next-line:variable-name
  _walletsListContainer: HTMLElement;
  _walletsConunter: number = 0;

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

  get walletsContainer(): HTMLElement {
    if (!this._walletsContainer) {
      this._walletsContainer = document.getElementById('wallets-container');
      return this._walletsContainer;
    }
    return this._walletsContainer;
  }

  get walletsListContainer(): HTMLElement {
    if (!this._walletsListContainer) {
      this._walletsListContainer = document.getElementById('wallets-list-container');
      return this._walletsListContainer;
    }
    return this._walletsListContainer;
  }

  prev() {
    if (this._walletsConunter >= 0) {
      return;
    }
    this._walletsConunter++;
    Array.from(this.walletsListContainer.children).forEach((card: HTMLElement) => {
      console.log(card);
      card.style.transform = `translateX(${this._walletsConunter * card.clientWidth}px)`;
    });
  }

  next() {
    if (this._walletsConunter <= -(this.walletsListContainer.children.length - 1)) {
      return;
    }
    this._walletsConunter--;
    Array.from(this.walletsListContainer.children).forEach((card: HTMLElement) => {
      console.log(card);
      card.style.transform = `translateX(${this._walletsConunter * card.clientWidth}px)`;
    });
  }
}
