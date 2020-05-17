import {IWalletTypes} from '../../add-wallet/add-wallet.component';
import {ITransaction} from '../../../transaction/transaction.interface';

export interface IWallet {
  id: number;
  title: string;
  type: IWalletTypes;
  balance: number;
  transaction: ITransaction[];
}
