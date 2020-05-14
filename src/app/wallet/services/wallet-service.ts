import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IWalletListItem} from './dataWallet/wallet-list-item';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class WalletService {
  private readonly URL = environment.apiUrl + '/wallets';
  constructor(
    private httpClient: HttpClient
  ) {}

  public getAllWalletItems(): Observable<IWalletListItem[]> {
    return this.httpClient.get(this.URL) as Observable<IWalletListItem[]>;
  }
}
