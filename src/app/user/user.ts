import {IWallet} from '../wallet/services/dataWallet/wallet-list-item';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token?: string;
  wallet: IWallet[];
  // tslint:disable-next-line:variable-name
  access_token?: any;
}
