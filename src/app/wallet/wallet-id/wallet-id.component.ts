import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {AddTransactionComponent} from '../add-transaction/add-transaction.component';
import {UserService} from '../../user/user.service';
import {WalletService} from '../services/wallet-service';
import {first} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IWallet} from '../services/dataWallet/wallet-list-item';



export interface ITransaction {
  amount: string;
  category: {id: number, name: string};
  description: string;
  dateTable: number;
}

@Component({
  selector: 'app-wallet-id',
  templateUrl: './wallet-id.component.html',
  styleUrls: ['./wallet-id.component.scss']
})

export class WalletIDComponent implements OnInit {

  transactionList: ITransaction[];

  displayedColumns: string[] = ['amount', 'category', 'description', 'date'];
  dataSource = new MatTableDataSource(this.transactionList);

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  date = new FormControl(new Date());
  wallet$: Observable<IWallet>;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private userService: UserService,
    private walletService: WalletService,
  ) { }

  ngOnInit(): void {
    this.wallet$ = this.walletService.wallet;
    const walletId = this.route.snapshot.paramMap.get('walletId');
    this.walletService.getWalletById(walletId);
    this.dataSource.sort = this.sort;
  }

  addTransaction() {
    const dialogRef = this.dialog.open(AddTransactionComponent, {
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = this.dataSource.data.concat(result);
        // this.dataSource.data = [result, ...this.dataSource.data];
      }
    });
  }
}
