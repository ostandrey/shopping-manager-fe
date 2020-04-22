import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {ITransaction} from '../add-transaction/add-transaction.component';

interface ICategoryType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent implements OnInit {

  public inputForm: FormGroup;

  CategoryType: Array<ICategoryType> = [
    {value: '0', viewValue: 'Cash'},
    {value: '1', viewValue: 'Bank card'},
  ];

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<AddWalletComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ITransaction) {
    this.inputForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      type: new FormControl(),
      balance: new FormControl(),
    });
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
