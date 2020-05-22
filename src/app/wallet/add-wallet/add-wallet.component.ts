import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {WalletService} from '../services/wallet-service';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user';
import {Observable} from 'rxjs';

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

  inputForm: FormGroup;
  walletTypes: Array<IWalletTypes> = [];
  user$: Observable<User>;
  types$: Observable<IWalletTypes[]>;

  constructor(
    public dialogRef: MatDialogRef<AddWalletComponent>,
    private walletService: WalletService,
    private userService: UserService
  ) {
    // this.inputForm = new FormGroup({
    //   title: new FormControl('', Validators.required),
    //   type: new FormControl('', Validators.required),
    //   balance: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
    //   ]),
    // });
  }

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

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    let userId = 0;
    this.user$.subscribe(
      (data: User) => {
        userId = data.id;
      }
    );
    // const {type, title, balance} = this.inputForm.value;
    // const body = {
    //   type: Number(type),
    //   title,
    //   balance: Number(balance),
    //   user: userId
    // };
    // this.walletService.addWallet(body);
    const {type, title, balance} = this.inputForm.value;
    const body = {
      type: Number(type),
      title,
      balance: Number(balance),
      user: userId
    };
    this.walletService.addWallet(body);
  }

  initializeForm(): void {
    this.inputForm = new FormGroup({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      balance: new FormControl('', [
        Validators.required,
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
      ])
    });
  }

}
