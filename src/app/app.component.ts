import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';


interface Wallet {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-manager-fe';
  Wallets: Wallet[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString())
}
