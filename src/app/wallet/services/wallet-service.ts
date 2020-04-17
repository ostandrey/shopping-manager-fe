import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {WalletResource} from './wallet-resource';
import {IWalletListItem} from './dataWallet/wallet-list-item';
import {filter, map} from 'rxjs/operators';

@Injectable()
export class WalletService {
  constructor(private walletResource: WalletResource ) {
  }

  public getAllWalletItems(): Observable<IWalletListItem[]> {
    return this.walletResource.findAll();
  }
}
