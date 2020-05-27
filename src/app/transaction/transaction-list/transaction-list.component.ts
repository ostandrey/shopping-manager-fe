import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {WalletService} from '../../wallet/services/wallet-service';
import {Observable} from 'rxjs';
import {IWallet} from '../../wallet/services/dataWallet/wallet.inteface';
import {ITransaction} from '../transaction.interface';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit, OnChanges {

  wallet$: Observable<IWallet>;
  @Input() transactions: ITransaction[] = [];
  constructor(
    private walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.wallet$ = this.walletService.wallet;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
