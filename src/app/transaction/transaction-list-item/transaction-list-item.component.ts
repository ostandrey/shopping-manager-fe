import {Component, Input, OnInit} from '@angular/core';
import {ITransaction} from '../transaction.interface';
import {TransactionService} from '../services/transaction.service';
import {WalletService} from '../../wallet/services/wallet-service';
import {ActivatedRoute} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {TransactionDeleteComponent} from '../transaction-delete/transaction-delete.component';
import {TransactionEditComponent} from '../transaction-edit/transaction-edit.component';
import {IWallet} from '../../wallet/services/dataWallet/wallet.inteface';
import {UserService} from '../../user/user.service';
import {Observable} from 'rxjs';
import {User} from '../../user/user';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss']
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction: ITransaction;

  wallet$: Observable<IWallet>;
  user$: Observable<User>;

  operations = {
    DELETE: 'delete',
    EDIT: 'edit'
  };

  constructor(
    private transactionService: TransactionService,
    private userService: UserService,
    private walletService: WalletService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.user;
    this.wallet$ = this.walletService.wallet;
  }

  transactionEdit(): void {
    const dialogRef = this.dialog.open(TransactionEditComponent, {
      data: this.transaction
    });

    dialogRef.afterClosed().subscribe(
      result => {
        this.changeWalletBalance(result, this.operations.EDIT);
        const walletId = this.route.snapshot.paramMap.get('walletId');
        this.walletService.getWalletById(walletId);
      }
    );
  }

  transactionDelete(): void {
    const dialogRef = this.dialog.open(TransactionDeleteComponent, {
      data: this.transaction
    });

    dialogRef.afterClosed().subscribe(
      result => {
        this.changeWalletBalance(result, this.operations.DELETE);
        const walletId = this.route.snapshot.paramMap.get('walletId');
        this.walletService.getWalletById(walletId);
      }
    );
  }

  changeWalletBalance(result, operation: string): void {
    if (!result) { return; }
    let userId = 0;
    this.user$.subscribe(user => userId = user.id);
    this.wallet$.subscribe((data: IWallet) => {
      let balance = parseFloat(`${data.balance}`);
      if (operation === this.operations.EDIT) {
        balance += parseFloat(result.amount)
        - parseFloat(`${this.transaction.amount}`);
      }
      if (operation === this.operations.DELETE) {
        balance -= parseFloat(result.amount);
      }
      const body = {
        id: data.id,
        balance,
        title: data.title,
        type: data.type,
        user: userId
      };
      this.walletService.editWallet(body.id, body);
    }).unsubscribe();
  }
}
