import {Component} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {

  user: Observable<User>;
  constructor(private userService: UserService) {}
}
