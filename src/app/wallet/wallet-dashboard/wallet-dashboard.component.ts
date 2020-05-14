import { Component, OnInit } from '@angular/core';
import {User} from '../../user/user';
import {UserService} from '../../user/user.service';


@Component({
  selector: 'app-wallet-dashboard',
  templateUrl: './wallet-dashboard.component.html',
  styleUrls: ['./wallet-dashboard.component.scss']
})
export class WalletDashboardComponent implements OnInit {
  loading = false;
  users: User;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loading = true;
    // this.userService.getAll().pipe(first()).subscribe(users => {
    //   console.log(users);
    //   this.loading = false;
    //   // this.users = users;
    // });
    // this.users = this.userService.getUser();
  }

}
