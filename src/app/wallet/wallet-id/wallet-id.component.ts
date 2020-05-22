import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../user/user.service';
import {WalletService} from '../services/wallet-service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IWallet} from '../services/dataWallet/wallet.inteface';
import {AddTransactionComponent} from '../../transaction/add-transaction/add-transaction.component';
import {ITransaction} from '../../transaction/transaction.interface';


@Component({
  selector: 'app-wallet-id',
  templateUrl: './wallet-id.component.html',
  styleUrls: ['./wallet-id.component.scss']
})

export class WalletIDComponent implements OnInit {

  transactionList: ITransaction[];

  dataSource = new MatTableDataSource(this.transactionList);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  date = new FormControl(new Date());
  wallet$: Observable<IWallet>;
  walletId: string;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private userService: UserService,
    private walletService: WalletService,
  ) { }

  ngOnInit(): void {
    this.wallet$ = this.walletService.wallet;
    this.walletId = this.route.snapshot.paramMap.get('walletId');
    this.walletService.getWalletById(this.walletId);
    this.dataSource.sort = this.sort;
  }

  addTransaction() {
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.walletService.getWalletById(this.walletId);
      // if (result) {
        // this.dataSource.data = this.dataSource.data.concat(result);
        // this.dataSource.data = [result, ...this.dataSource.data];
      // }
    });
  }
}
