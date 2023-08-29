import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDonateComponent } from './show-donate.component';

describe('ShowDonateComponent', () => {
  let component: ShowDonateComponent;
  let fixture: ComponentFixture<ShowDonateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDonateComponent]
    });
    fixture = TestBed.createComponent(ShowDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
