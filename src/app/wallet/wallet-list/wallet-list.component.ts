import { Component, OnInit } from '@angular/core';

interface IWalletListItem {
  value: string;
  title: string;
  type: string;
  balance: number;
}

@Component({
  selector: 'app-wallet-list',
  templateUrl: './wallet-list.component.html',
  styleUrls: ['./wallet-list.component.scss']
})
export class WalletListComponent {

  walletList: IWalletListItem[] = [
    {value: '0', title: 'My-wallet', type: 'Cash', balance: 12313},
    {value: '1', title: 'Wallets', type: 'Cash', balance: 54643},
    {value: '2', title: 'My-wallet', type: 'Cash', balance: 12313}
  ];
}
