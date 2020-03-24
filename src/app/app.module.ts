import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

import { ShoppingListsComponent } from './shopping-lists/shopping-lists.component';
import { TrashComponent } from './trash/trash.component';
import { LoginComponent } from './login/login.component';
import { MyShoppingListComponent } from './my-shopping-list/my-shopping-list.component';
import { CreateListComponent } from './create-list/create-list.component';
import { CreateListService} from './create-list/create-list.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShoppingListsComponent,
    routingComponents,
    TrashComponent,
    LoginComponent,
    MyShoppingListComponent,
    CreateListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [CreateListService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, CreateListComponent]
})
export class AppModule { }
