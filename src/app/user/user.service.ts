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
  // tslint:disable-next-line:variable-name
  private _message = new BehaviorSubject<string>('');
  readonly message = this._message.asObservable();

  constructor(private http: HttpClient) { }

  getUser() {
    this.http.get<User>(`${environment.apiUrl}/user`)
      .subscribe(
        data => {
          this._user.next({...data});
        }
      );
  }

  addUser(body) {
    this.http.post<User>(`${environment.apiUrl}/user`, body)
      .subscribe(
        data => {
          this._message.next('User was created successfully');
        },
        error => {
          console.error(`Error ${error.status}: ${error.message}`);
          this._message.next('Something went wrong');
        }
      );
  }

  logout() {
    this._user.next(initUser);
  }
}
