import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from './user';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';

const initUser = {
  id: 0,
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  wallet: []
};

@Injectable({ providedIn: 'root' })
export class UserService {
  // tslint:disable-next-line:variable-name
  private _user = new BehaviorSubject<User>(initUser);
  readonly user = this._user.asObservable();

  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get<User>(`${environment.apiUrl}/user`)
      .subscribe(
        data => {
          this._user.next({...data});
        }
      );
  }
}
