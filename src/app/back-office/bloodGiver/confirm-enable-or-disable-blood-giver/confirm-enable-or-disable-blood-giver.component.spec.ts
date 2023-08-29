import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEnableOrDisableBloodGiverComponent } from './confirm-enable-or-disable-blood-giver.component';

describe('ConfirmEnableOrDisableBloodGiverComponent', () => {
  let component: ConfirmEnableOrDisableBloodGiverComponent;
  let fixture: ComponentFixture<ConfirmEnableOrDisableBloodGiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmEnableOrDisableBloodGiverComponent]
    });
    fixture = TestBed.createComponent(ConfirmEnableOrDisableBloodGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
