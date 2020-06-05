import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TransactionService} from '../services/transaction.service';
import {ITransaction} from '../transaction.interface';

@Component({
  selector: 'app-transaction-delete',
  templateUrl: './transaction-delete.component.html',
  styleUrls: ['./transaction-delete.component.scss']
})
export class TransactionDeleteComponent {

  constructor(
    private transactionService: TransactionService,
    public dialogRef: MatDialogRef<TransactionDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITransaction
  ) { }

  deleteTransaction(): void {
    this.transactionService.deleteTransaction(this.data.id);
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
