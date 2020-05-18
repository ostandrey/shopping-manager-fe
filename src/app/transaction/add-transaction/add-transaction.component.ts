import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import {ICategory, ICategoryType} from '../transaction.interface';
import { Observable} from 'rxjs';
import {TransactionService} from '../services/transaction.service';
import {WalletService} from '../../wallet/services/wallet-service';


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

  constructor(
    public dialogRef: MatDialogRef<AddTransactionComponent>,
    private walletService: WalletService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.categories$ = this.transactionService.categories;
    this.types$ = this.transactionService.catTypes;
    this.transactionService.getTransactionCategories();
    this.transactionService.getTransactionCategoryTypes();
  }

  onSubmit() {  }

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

  filterCategories(): void {
    this.categories$.subscribe(
      (categories: ICategory[]) => {
        this.filteredCategories = categories.filter(
          category => category.type.id === Number(this.transactionForm.value.categoryType)
        );
      }
    );
  }
}
