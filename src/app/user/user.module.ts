import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {UserComponent} from './user.component';

@NgModule({
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [UserService],
})
export class UserModule {}
