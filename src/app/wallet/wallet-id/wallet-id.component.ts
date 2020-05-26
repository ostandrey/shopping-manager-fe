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
import {User} from '../../user/user';


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
  user$: Observable<User>;
  isLoading$: Observable<boolean>;
  walletId: string;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private userService: UserService,
    private walletService: WalletService,
  ) { }

  ngOnInit(): void {
    this.user$ = this.userService.user;
    this.wallet$ = this.walletService.wallet;
    this.isLoading$ = this.walletService.isLoading;
    this.walletId = this.route.snapshot.paramMap.get('walletId');
    this.walletService.getWalletById(this.walletId);
    this.dataSource.sort = this.sort;
  }

  addTransaction() {
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      let userId = 0;
      this.user$.subscribe(user => userId = user.id);
      this.wallet$.subscribe((data: IWallet) => {
        const balance = parseFloat(String(data.balance)) + parseFloat(result.amount);
        const body = {
          id: data.id,
          balance,
          title: data.title,
          type: data.type,
          user: userId
        };
        this.walletService.editWallet(body.id, body);
      }).unsubscribe();
      this.walletService.getWalletById(this.walletId);
    });
  }
}
