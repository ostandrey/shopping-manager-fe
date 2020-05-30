import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthenticationService} from './authentification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$: Observable<User>;
  user: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.user = x);
  }

  ngOnInit(): void {
    this.user$ = this.userService.user;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
