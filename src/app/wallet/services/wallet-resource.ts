import {Injectable} from '@angular/core';
import {ApiConfig} from '../api-config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IWalletListItem} from './dataWallet/wallet-list-item';

@Injectable()
export class WalletResource {
  private readonly URL = ApiConfig.url + '/wallets';
  constructor(private httpClient: HttpClient) {
  }
  public findAll(): Observable<IWalletListItem[]> {
     return this.httpClient.get(this.URL) as Observable<IWalletListItem[]>;
  }
}
