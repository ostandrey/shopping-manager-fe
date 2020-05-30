import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {IWallet} from '../services/dataWallet/wallet.inteface';
import {WalletService} from '../services/wallet-service';

@Component({
  selector: 'app-delete-wallet',
  templateUrl: './delete-wallet.component.html',
  styleUrls: ['./delete-wallet.component.scss']
})
export class DeleteWalletComponent {

  constructor(
    private walletService: WalletService,
    public dialogRef: MatDialogRef<DeleteWalletComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IWallet
  ) { }

  deleteWallet(): void {
    this.walletService.deleteWallet(this.data.id);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
