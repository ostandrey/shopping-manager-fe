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
import {ICategory, ICategoryType, ITransaction} from '../../transaction/transaction.interface';
import {User} from '../../user/user';
import {TransactionService} from '../../transaction/services/transaction.service';


@Component({
  selector: 'app-wallet-id',
  templateUrl: './wallet-id.component.html',
  styleUrls: ['./wallet-id.component.scss']
})

export class WalletIDComponent implements OnInit {

  categories$: Observable<ICategory[]>;
  types$: Observable<ICategoryType[]>;
  types: ICategoryType[] = [];
  categories: ICategory[] = [];
  categoriesExpenses: number[] = [];
  categoriesIncomes: number[] = [];
  transactionsList: ITransaction[];
  transactionsListToDisplay: ITransaction[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // date = new FormControl(new Date());
  wallet$: Observable<IWallet>;
  user$: Observable<User>;
  isLoading$: Observable<boolean>;
  walletId: string;

  filterCategory: any;
  filterType: any;
  filterStartDate = new FormControl(new Date());
  filterEndDate = new FormControl(new Date());

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private userService: UserService,
    private walletService: WalletService,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    this.categories$ = this.transactionService.categories;
    this.types$ = this.transactionService.catTypes;
    this.user$ = this.userService.user;
    this.wallet$ = this.walletService.wallet;
    this.walletService.wallet.subscribe((wallet: IWallet) => {
      this.transactionsList = wallet.transaction;
      this.transactionsListToDisplay = wallet.transaction;
    });
    this.transactionService.categories.subscribe((categories: ICategory[]) => {
      this.categories = categories;
      this.categories.forEach((category) => {
        if (category.type.id === 1) {
          this.categoriesExpenses.push(category.id);
        } else {
          this.categoriesIncomes.push(category.id);
        }
      });
    });
    this.transactionService.catTypes.subscribe((types: ICategoryType[]) => {
      this.types = types;
    });
    this.isLoading$ = this.walletService.isLoading;
    this.walletId = this.route.snapshot.paramMap.get('walletId');
    this.walletService.getWalletById(this.walletId);
    this.transactionService.getTransactionCategoryTypes();
    this.transactionService.getTransactionCategories();
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

  filterByType() {
    this.transactionsListToDisplay = [];
    this.transactionsList.forEach((transaction) => {
      if (this.filterType === '1' && this.categoriesExpenses.indexOf(transaction.category.id) >= 0) {
        this.transactionsListToDisplay.push(transaction);
      }
      if (this.filterType === '2' && this.categoriesIncomes.indexOf(transaction.category.id) >= 0) {
        this.transactionsListToDisplay.push(transaction);
      }
    });
  }

  filterByDate() {
    this.transactionsListToDisplay = [];
    this.transactionsList.forEach((transaction) => {
      if (Date.parse(`${transaction.date}`) >= Date.parse(`${this.filterStartDate.value}`)
        && Date.parse(`${transaction.date}`) <= Date.parse(`${this.filterEndDate.value}`)) {
        this.transactionsListToDisplay.push(transaction);
      }
    });
  }

  filterByCategory() {
    this.transactionsListToDisplay = [];
    this.transactionsList.forEach((transaction) => {
      if (transaction.category.id === this.filterCategory) {
        this.transactionsListToDisplay.push(transaction);
      }
    });
  }
}
