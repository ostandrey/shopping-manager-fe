import { Component, OnInit } from '@angular/core';
import {WalletService} from '../../wallet/services/wallet-service';
import {Observable} from 'rxjs';
import {IWallet} from '../../wallet/services/dataWallet/wallet.inteface';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  wallet$: Observable<IWallet>;

  constructor(
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.wallet$ = this.walletService.wallet;
  }

}
