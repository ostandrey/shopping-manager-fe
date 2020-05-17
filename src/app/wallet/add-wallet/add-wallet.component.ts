import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup} from '@angular/forms';
import {ITransaction} from '../add-transaction/add-transaction.component';

export interface IWalletTypes {
  id: number;
  name: string;
}

@Component({
  selector: 'app-add-wallet',
  templateUrl: './add-wallet.component.html',
  styleUrls: ['./add-wallet.component.scss']
})
export class AddWalletComponent implements OnInit {

  userId: number;
  inputForm: FormGroup;

  walletTypes: Array<IWalletTypes> = [
    {id: 0, name: 'Cash'},
    {id: 1, name: 'Bank card'},
  ];

  constructor(
    public dialogRef: MatDialogRef<AddWalletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITransaction,
    private walletService: WalletService,
    private userService: UserService
  ) {
    this.inputForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      type: new FormControl(),
      balance: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.userService.user.subscribe(
      (data: User) => {
        this.userId = data.id;
      }
    );
    this.walletService.getWalletTypes()
      .subscribe(
        (data: IWalletTypes[]) => {
          this.walletTypes = data;
        }
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    const {type, title, balance} = this.inputForm.value;
    const body = {
      type: Number(type),
      title,
      balance: Number(balance),
      user: this.userId
    };
    this.walletService.addWallet(body);
  }

}
