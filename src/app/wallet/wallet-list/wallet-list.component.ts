import { Component, OnInit } from '@angular/core';

interface IWalletListItem {
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
    {title: 'My-wallet', type: 'Cash', balance: 12313},
    {title: 'Wallets', type: 'Cash', balance: 54643},
    {title: 'My-wallet', type: 'Cash', balance: 12313}
  ];
}
