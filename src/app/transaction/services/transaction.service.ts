import {Injectable} from '@angular/core';
import {BehaviorSubject,  throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {ICategory, ICategoryType, ITransaction} from '../transaction.interface';

const initTransaction = {
  id: 0,
  amount: 0,
  category: {
    id: 0,
    type: {
      id: 0,
      name: ''
    },
    name: ''
  },
  description: '',
  date: new Date()
};

@Injectable()
export class TransactionService {
  // tslint:disable-next-line:variable-name
  private _transaction = new BehaviorSubject<ITransaction>(initTransaction);
  readonly transaction = this._transaction.asObservable();

  // tslint:disable-next-line:variable-name
  private _categories = new BehaviorSubject<ICategory[]>([]);
  readonly categories = this._categories.asObservable();

  // tslint:disable-next-line:variable-name
  private _catTypes = new BehaviorSubject<ICategoryType[]>([]);
  readonly catTypes = this._catTypes.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {}

  getTransactionById(id) {
    this.httpClient.get<ITransaction>(`${environment.apiUrl}/transactions/${id}`)
      .subscribe(
        data => {
          this._transaction.next({...data});
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }

  addTransaction(transaction) {
    this.httpClient.post<ITransaction>(`${environment.apiUrl}/transactions`, transaction)
      .subscribe(
        data => console.log('The wallet was added successfully'),
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }

  getTransactionCategories() {
    this.httpClient.get<ICategory[]>(`${environment.apiUrl}/transaction_categories`)
      .subscribe(
        data => {
          this._categories.next([...data]);
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }

  getTransactionCategoryTypes() {
    this.httpClient.get<ICategoryType[]>(`${environment.apiUrl}/transaction_category_types`)
      .subscribe(
        data => {
          this._catTypes.next([...data]);
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }

  deleteTransaction(id) {
    this.httpClient.delete<ITransaction>(`${environment.apiUrl}/transactions/${id}`)
      .subscribe(
        data => console.log('The wallet was deleted successfully'),
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }
}
