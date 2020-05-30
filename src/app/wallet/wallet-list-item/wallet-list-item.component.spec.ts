import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletListItemComponent } from './wallet-list-item.component';

describe('WalletListItemComponent', () => {
  let component: WalletListItemComponent;
  let fixture: ComponentFixture<WalletListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
