import {Component, Inject, OnInit} from '@angular/core';
import {TransactionService} from '../services/transaction.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ICategory, ICategoryType, ITransaction} from '../transaction.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {IWallet} from '../../wallet/services/dataWallet/wallet.inteface';
import {WalletService} from '../../wallet/services/wallet-service';

@Component({
  selector: 'app-transaction-edit',
  templateUrl: './transaction-edit.component.html',
  styleUrls: ['./transaction-edit.component.scss']
})
export class TransactionEditComponent implements OnInit {

  transactionForm: FormGroup;
  wallet$: Observable<IWallet>;

  constructor(
    private walletService: WalletService,
    private transactionService: TransactionService,
    public dialogRef: MatDialogRef<TransactionEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITransaction
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.wallet$ = this.walletService.wallet;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeForm(): void {
    this.transactionForm = new FormGroup({
      amount: new FormControl(this.data.amount, [
        Validators.required,
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
      ]),
      description: new FormControl(this.data.description),
      date: new FormControl(this.data.date, Validators.required),
    });
  }

  onSubmitEdit() {
    let walletId = 0;
    this.wallet$.subscribe(
      (data: IWallet) => {
        walletId = data.id;
      }
    );
    const {amount, description, date} = this.transactionForm.value;
    const desc = description === null ? '' : description;
    const body = {
      id: this.data.id,
      amount: Number(amount),
      date,
      description: desc,
      category: Number(this.data.category.id),
      wallet: walletId
    };
    this.transactionService.editTransaction(walletId, body);
  }
}
