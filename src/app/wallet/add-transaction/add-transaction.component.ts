import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';

interface ICategoryExpenses {
  value: string;
  viewValue: string;
}

interface ICategoryIncomes {
  value: string;
  viewValue: string;
}

export interface ITransaction {
  amount: string;
  category: string;
  description: string;
  dateTable: number;
}

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss']
})
export class AddTransactionComponent {

  public inputForm: FormGroup;

  CategoryExpenses: Array<ICategoryExpenses> = [
    {value: '0', viewValue: 'Food & Drink'},
    {value: '1', viewValue: 'Shopping'},
    {value: '2', viewValue: 'Transport'},
    {value: '3', viewValue: 'Home'},
    {value: '4', viewValue: 'Bills % Fees'},
    {value: '5', viewValue: 'Entertainment'},
    {value: '6', viewValue: 'Car'},
    {value: '7', viewValue: 'Travel'},
    {value: '8', viewValue: 'Healthcare'},
    {value: '9', viewValue: 'Education'},
    {value: '10', viewValue: 'Gifts'},
    {value: '11', viewValue: 'Sport & Hobbies'},
    {value: '12', viewValue: 'Beauty'},
    {value: '13', viewValue: 'Work'},
    {value: '14', viewValue: 'Other'},
  ];

  CategoryIncomes: Array<ICategoryIncomes> = [
    {value: '0', viewValue: 'Salary'},
    {value: '1', viewValue: 'Business'},
    {value: '2', viewValue: 'Gifts'},
    {value: '3', viewValue: 'Extra Income'},
    {value: '4', viewValue: 'Insurance Payout'},
  ];


  // date = new FormControl(new Date());
  // serializedDate = new FormControl((new Date()).toISOString());

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITransaction) {

    this.inputForm = new FormGroup({
      amount: new FormControl(),
      category: new FormControl(),
      description: new FormControl(),
      date: new FormControl(new Date()),
    });
  }

  onSubmit() {  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
