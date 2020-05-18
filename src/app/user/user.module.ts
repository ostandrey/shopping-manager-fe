import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './user.service';
import {UserComponent} from './user.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        MatButtonModule
    ],
  providers: [UserService],
})
export class UserModule {}
