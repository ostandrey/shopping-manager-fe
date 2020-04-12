import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddTransactionComponent} from '../add-transaction/add-transaction.component';


interface IWallet {
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
  selector: 'app-wallet-id',
  templateUrl: './wallet-id.component.html',
  styleUrls: ['./wallet-id.component.scss']
})

export class WalletIDComponent implements OnInit {

  ELEMENT_DATA: ITransaction[] = [];

  data: ITransaction;

  displayedColumns: string[] = ['amount', 'category', 'description', 'date'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  Wallets: Array<IWallet> = [
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

   date = new FormControl(new Date());

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
   this.dataSource.sort = this.sort;
  }

  addTransaction() {
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result) {
        this.dataSource.data = this.dataSource.data.concat(result);
        // this.dataSource.data = [result, ...this.dataSource.data];
        console.log(this.ELEMENT_DATA);
      }
    });
  }
}
