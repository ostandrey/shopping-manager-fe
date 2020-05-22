import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TransactionDeleteComponent} from '../../transaction/transaction-delete/transaction-delete.component';
import {TransactionService} from '../../transaction/services/transaction.service';
import {WalletService} from '../services/wallet-service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteWalletComponent} from '../delete-wallet/delete-wallet.component';
import {UserService} from '../../user/user.service';
import {TransactionEditComponent} from '../../transaction/transaction-edit/transaction-edit.component';
import {EditWalletComponent} from '../edit-wallet/edit-wallet.component';

interface IWallet {
  id: number;
  title: string;
  type: {id: number, name: string};
  balance: number;
}

@Component({
  selector: 'app-wallet-list-item',
  templateUrl: './wallet-list-item.component.html',
  styleUrls: ['./wallet-list-item.component.scss']
})
export class WalletListItemComponent {
  @Input() wallet: IWallet;
  constructor(
    private router: Router,
    private userService: UserService,
    private walletService: WalletService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}
  navigate(): void {
    this.router.navigate([`/dashboard/${this.wallet.id}`]);
  }

  walletDelete(): void {
    const dialogRef = this.dialog.open(DeleteWalletComponent, {
      data: this.wallet
    });

    dialogRef.afterClosed().subscribe(
      result => {
        this.userService.getUser();
      }
    );
  }

  walletEdit(): void {
    const dialogRef = this.dialog.open(EditWalletComponent, {
      data: this.wallet
    });

    dialogRef.afterClosed().subscribe(
      result => {
        this.userService.getUser();
      }
    );
  }
}
