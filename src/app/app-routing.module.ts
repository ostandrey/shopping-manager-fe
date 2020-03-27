import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingListsComponent} from './shopping-lists/shopping-lists.component';
import {IncomesMainComponent} from './incomes/incomes-main/incomes-main.component';
import {HomeMainComponent} from './home/home-main/home-main.component';


const routes: Routes = [
  {path: 'home', component: HomeMainComponent},
  {path: 'incomes', component: IncomesMainComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ShoppingListsComponent];
