import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {List} from '../model/list';

@Injectable({
  providedIn: 'root'
})
export class CreateListService {

  shoppingList: List[] = [];

  constructor() { }

  addList(list: List) {
    list.ID = this.shoppingList.length + 1;
    this.shoppingList.push(list);
  }

  editList(list: List) {
    const index = this.shoppingList.findIndex(l => l.ID === list.ID);
    this.shoppingList[index] = list;
  }

  deleteList(id: number) {
    const list = this.shoppingList.findIndex(l => l.ID === id);
    this.shoppingList.splice(list, 1);
  }

  getAllLists() {
    return this.shoppingList;
  }
 /* form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    name: new FormControl(''),
  });*/
}
