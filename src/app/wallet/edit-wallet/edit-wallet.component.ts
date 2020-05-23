import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WalletService} from '../services/wallet-service';
import {UserService} from '../../user/user.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../user/user';
import {IWalletTypes} from '../add-wallet/add-wallet.component';
import {Observable} from 'rxjs';
import {ITransaction} from '../../transaction/transaction.interface';
import {IWallet} from '../services/dataWallet/wallet.inteface';

@Component({
  selector: 'app-edit-wallet',
  templateUrl: './edit-wallet.component.html',
  styleUrls: ['./edit-wallet.component.scss']
})
export class EditWalletComponent implements OnInit {

  inputForm: FormGroup;
  walletTypes: Array<IWalletTypes> = [];
  user$: Observable<User>;
  types$: Observable<IWalletTypes[]>;

  constructor(
    public dialogRef: MatDialogRef<EditWalletComponent>,
    private walletService: WalletService,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: IWallet
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.user$ = this.userService.user;
    this.types$ = this.walletService.walletTypes;
    this.userService.getUser();
    this.walletService.getWalletTypes();
    // this.userService.user.subscribe(
    //   (data: User) => {
    //     this.userId = data.id;
    //   }
    // );
    // this.walletService.getWalletTypes()
    //   .subscribe(
    //     (data: IWalletTypes[]) => {
    //       this.walletTypes = data;
    //     }
    //   );
  }

  initializeForm(): void {
    this.inputForm = new FormGroup({
      title: new FormControl(this.data.title, Validators.required),
      type: new FormControl(this.data.type.id, Validators.required),
      balance: new FormControl(this.data.balance, [
        Validators.required,
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
      ])
    });
  }

  onSubmitEdit() {
    let userId = 0;
    this.user$.subscribe(
      (data: User) => {
        userId = data.id;
      }
    );
    const {type, title, balance} = this.inputForm.value;
    const body = {
      id: this.data.id,
      type: Number(type),
      title,
      balance: Number(balance),
      user: userId
    };
    this.walletService.editWallet(userId, body);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
