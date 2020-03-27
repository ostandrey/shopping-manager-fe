import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesMainComponent } from './incomes-main.component';

describe('IncomesMainComponent', () => {
  let component: IncomesMainComponent;
  let fixture: ComponentFixture<IncomesMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
