import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletIDComponent } from './wallet-id.component';

describe('WalletIDComponent', () => {
  let component: WalletIDComponent;
  let fixture: ComponentFixture<WalletIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
