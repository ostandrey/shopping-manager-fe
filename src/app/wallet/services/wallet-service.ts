import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {IWallet} from './dataWallet/wallet.inteface';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {IWalletTypes} from '../add-wallet/add-wallet.component';

const initWallet = {
  id: 0,
  title: '',
  type: {
    id: 1,
    name: ''
  },
  balance: 0,
  transaction: []
};

@Injectable()
export class WalletService {
  // tslint:disable-next-line:variable-name
  private _isLoading = new BehaviorSubject<boolean>(false);
  readonly isLoading = this._isLoading.asObservable();
  // tslint:disable-next-line:variable-name
  private _wallet = new BehaviorSubject<IWallet>(initWallet);
  readonly wallet = this._wallet.asObservable();

  // tslint:disable-next-line:variable-name
  private _walletTypes = new BehaviorSubject<IWalletTypes[]>([]);
  readonly walletTypes = this._walletTypes.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {}

  getWalletById(id) {
    this._isLoading.next(true);
    this.httpClient.get<IWallet>(`${environment.apiUrl}/wallets/${id}`)
      .subscribe(
        data => {
          this._wallet.next({...data});
          this._isLoading.next(false);
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
          this._isLoading.next(false);
        }
      );
  }

  addWallet(wallet) {
    this._isLoading.next(true);
    this.httpClient.post<IWallet>(`${environment.apiUrl}/wallets`, wallet)
      .subscribe(
        data => {
          console.log('The wallet was added successfully');
          this._isLoading.next(false);
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
          this._isLoading.next(false);
        }
      );
  }

  getWalletTypes() {
    this._isLoading.next(true);
    this.httpClient.get<IWalletTypes[]>(`${environment.apiUrl}/wallets_type`)
      .subscribe(
        data => {
          this._walletTypes.next([...data]);
          this._isLoading.next(false);
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
          this._isLoading.next(false);
        }
      );
  }

  deleteWallet(id) {
    this.httpClient.delete<IWallet>(`${environment.apiUrl}/wallets/${id}`)
      .subscribe(
        data => console.log('The wallet was deleted successfully'),
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }

  editWallet(id, wallet) {
    this.httpClient.put<IWallet>(`${environment.apiUrl}/wallets/${id}`, wallet)
      .subscribe(
        data => console.log('The wallet was added successfully'),
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }
}
