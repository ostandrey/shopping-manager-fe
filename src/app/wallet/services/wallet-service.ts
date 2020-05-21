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
  private _wallet = new BehaviorSubject<IWallet>(initWallet);
  readonly wallet = this._wallet.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {}

  getWalletById(id) {
    this.httpClient.get<IWallet>(`${environment.apiUrl}/wallets/${id}`)
      .subscribe(
        data => {
          this._wallet.next({...data});
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }

  addWallet(wallet) {
    this.httpClient.post<IWalletTypes>(`${environment.apiUrl}/wallets`, wallet)
      .subscribe(
        data => console.log('The wallet was added successfully'),
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          throwError(error);
        }
      );
  }

  getWalletTypes(): Observable<IWalletTypes[]> {
    return this.httpClient.get<IWalletTypes[]>(`${environment.apiUrl}/wallets_type`);
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
}
