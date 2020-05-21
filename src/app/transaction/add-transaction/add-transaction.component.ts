import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import {ICategory, ICategoryType} from '../transaction.interface';
import { Observable} from 'rxjs';
import {TransactionService} from '../services/transaction.service';
import {WalletService} from '../../wallet/services/wallet-service';
import {IWallet} from '../../wallet/services/dataWallet/wallet.inteface';


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  transactionForm: FormGroup;
  filteredCategories: ICategory[];
  categories$: Observable<ICategory[]>;
  types$: Observable<ICategoryType[]>;
  wallet$: Observable<IWallet>;

  constructor(
    public dialogRef: MatDialogRef<AddTransactionComponent>,
    private walletService: WalletService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.categories$ = this.transactionService.categories;
    this.types$ = this.transactionService.catTypes;
    this.wallet$ = this.walletService.wallet;
    this.transactionService.getTransactionCategories();
    this.transactionService.getTransactionCategoryTypes();
  }

  onSubmit() {
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
    this.transactionService.addTransaction(body);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initializeForm(): void {
    this.transactionForm = new FormGroup({
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
      ]),
      categoryType: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      description: new FormControl(),
      date: new FormControl(new Date(), Validators.required),
    });
  }

  onSelectCategoryType(): void {
    this.filterCategories();
    this.addAmountPrefix();
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

  addAmountPrefix(): void {
    if (Number(this.transactionForm.value.categoryType) === 2) {
      this.transactionForm.controls.amount.setValue('-');
    }
  }
}
