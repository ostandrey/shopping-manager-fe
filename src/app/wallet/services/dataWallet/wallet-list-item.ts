import {ITransaction} from '../../wallet-id/wallet-id.component';
import {IWalletTypes} from '../../add-wallet/add-wallet.component';

export interface IWallet {
  id: number;
  title: string;
  type: IWalletTypes;
  balance: number;
  transaction: ITransaction[];
}
