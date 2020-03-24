import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingListsComponent} from './shopping-lists/shopping-lists.component';
import {TrashComponent} from './trash/trash.component';
import {MyShoppingListComponent} from './my-shopping-list/my-shopping-list.component';


const routes: Routes = [
  {path: 'shopping-lists', component: ShoppingListsComponent},
  {path: 'trash', component: TrashComponent},
  {path: 'my-shopping-list', component: MyShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ShoppingListsComponent, TrashComponent];
