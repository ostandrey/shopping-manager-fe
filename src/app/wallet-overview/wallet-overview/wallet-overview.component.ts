import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

interface IWallet {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-wallet-overview',
  templateUrl: './wallet-overview.component.html',
  styleUrls: ['./wallet-overview.component.scss']
})
export class WalletOverviewComponent {

  Wallets: Array<IWallet> = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
}
