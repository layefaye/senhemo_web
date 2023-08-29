import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBloodBagComponent } from './detail-blood-bag.component';

describe('DetailBloodBagComponent', () => {
  let component: DetailBloodBagComponent;
  let fixture: ComponentFixture<DetailBloodBagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBloodBagComponent]
    });
    fixture = TestBed.createComponent(DetailBloodBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
