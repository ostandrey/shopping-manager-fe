import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

interface IWallet {
  id: number;
  title: string;
  type: {id: number, name: string};
  balance: number;
}

@Component({
  selector: 'app-wallet-list-item',
  templateUrl: './wallet-list-item.component.html',
  styleUrls: ['./wallet-list-item.component.scss']
})
export class WalletListItemComponent {
  @Input() wallet: IWallet;
  constructor(private router: Router) {}
  navigate(): void {
    this.router.navigate([`/dashboard/${this.wallet.id}`]);
  }
}
