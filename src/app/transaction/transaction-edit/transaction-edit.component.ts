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
export class TransactionEditComponent implements OnInit{

  transactionForm: FormGroup;
  filteredCategories: ICategory[];
  categories$: Observable<ICategory[]>;
  types$: Observable<ICategoryType[]>;
  wallet$: Observable<IWallet>;

  constructor(
    private walletService: WalletService,
    private transactionService: TransactionService,
    public dialogRef: MatDialogRef<TransactionEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITransaction
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.categories$ = this.transactionService.categories;
    this.types$ = this.transactionService.catTypes;
    this.wallet$ = this.walletService.wallet;
    this.transactionService.getTransactionCategories();
    this.transactionService.getTransactionCategoryTypes();
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
      categoryType: new FormControl('', Validators.required),
      category: new FormControl(this.data.category.id, Validators.required),
      description: new FormControl(this.data.description),
      date: new FormControl(this.data.date, Validators.required),
    });
  }

  filterCategories(): void {
    this.categories$.subscribe(
      (categories: ICategory[]) => {
        this.filteredCategories = categories.filter(
          category => category.type.id === Number(this.transactionForm.value.categoryType)
        );
      }
    );
  }

  onSubmitEdit() {
    let walletId = 0;
    this.wallet$.subscribe(
      (data: IWallet) => {
        walletId = data.id;
      }
    );
    const {amount, description, date, category} = this.transactionForm.value;
    const desc = description === null ? '' : description;
    const body = {
      amount: Number(amount),
      date,
      description: desc,
      category: Number(category),
      wallet: walletId
    };
    this.transactionService.editTransaction(walletId, body);
  }
}
