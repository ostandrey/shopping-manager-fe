import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShoppingListComponent } from './my-shopping-list.component';

describe('MyShoppingListComponent', () => {
  let component: MyShoppingListComponent;
  let fixture: ComponentFixture<MyShoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyShoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
