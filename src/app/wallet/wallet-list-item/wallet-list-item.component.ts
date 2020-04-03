import {Component, Input, OnInit} from '@angular/core';

interface IWalletListItem {
  value: string;
  title: string;
  type: string;
  balance: number;
}

@Component({
  selector: 'app-wallet-list-item',
  templateUrl: './wallet-list-item.component.html',
  styleUrls: ['./wallet-list-item.component.scss']
})
export class WalletListItemComponent {
  @Input() wallet: IWalletListItem;
}
