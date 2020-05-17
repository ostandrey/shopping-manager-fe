import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';
import {ICategory, ICategoryType, ITransaction} from '../transaction.interface';
import {Observable} from 'rxjs';
import {TransactionService} from '../services/transaction.service';


@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent implements OnInit {

  transactionForm: FormGroup;
  categories$: Observable<ICategory[]>;
  types$: Observable<ICategoryType[]>;

  constructor(
    public dialogRef: MatDialogRef<AddTransactionComponent>,
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
      amount: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      date: new FormControl(new Date()),
    });
  }

}
