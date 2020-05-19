import {Component, Input} from '@angular/core';
import {ITransaction} from '../transaction.interface';
import {TransactionService} from '../services/transaction.service';
import {WalletService} from '../../wallet/services/wallet-service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {TransactionDeleteComponent} from '../transaction-delete/transaction-delete.component';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent {
  @Input() transaction: ITransaction;

  constructor(
    private transactionService: TransactionService,
    private walletService: WalletService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  transactionDelete(): void {
    const dialogRef = this.dialog.open(TransactionDeleteComponent, {
      data: this.transaction
    });

    dialogRef.afterClosed().subscribe(
      result => {
        const walletId = this.route.snapshot.paramMap.get('walletId');
        this.walletService.getWalletById(walletId);
      }
    );
  }
}
