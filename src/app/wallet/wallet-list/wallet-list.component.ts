import { Component, OnInit } from '@angular/core';
import {WalletService} from '../services/wallet-service';
import {Observable} from 'rxjs';

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

  walletList: Observable<IWalletListItem[]>

  constructor(private walletService: WalletService) {
  }

  ngOnInit(): void {
    this.walletList = this.walletService.getAllWalletItems();
  }

}
