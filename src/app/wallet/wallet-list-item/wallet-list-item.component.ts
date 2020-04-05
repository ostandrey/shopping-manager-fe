import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

interface IWalletListItem {
  id: number;
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
  constructor(private router: Router) {}
  navigate(): void {
    this.router.navigate([`/dashboard/${this.wallet.id}`]);
  }
}
