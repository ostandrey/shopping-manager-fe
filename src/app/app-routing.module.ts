import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingListsComponent} from './shopping-lists/shopping-lists.component';


const routes: Routes = [
  {path: 'shopping-lists', component: ShoppingListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ShoppingListsComponent]
