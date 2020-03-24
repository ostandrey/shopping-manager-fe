import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CreateListComponent} from '../create-list/create-list.component';
import {CreateListService} from '../create-list/create-list.service';

@Component({
  selector: 'app-my-shopping-list',
  templateUrl: './my-shopping-list.component.html',
  styleUrls: ['./my-shopping-list.component.scss']
})
export class MyShoppingListComponent implements OnInit {

  isPopupOpened = false;

  constructor( private dialog?: MatDialog,
               private createListService?: CreateListService) { }

  ngOnInit(): void {
  }

  get ShoppingList() {
    return this.createListService.getAllLists();
  }

  addList() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(CreateListComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened =  false;
    });
  }

  editList(id: number) {
    this.isPopupOpened = true;
    const list = this.createListService.getAllLists().find(l => l.ID === id);
    const dialogRef = this.dialog.open(CreateListComponent, {
      data: list
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isPopupOpened =  false;
    });
  }

  deleteList(id: number) {
    this.createListService.deleteList(id);
  }
}
