import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBloodGiverComponent } from './detail-blood-giver.component';

describe('DetailBloodGiverComponent', () => {
  let component: DetailBloodGiverComponent;
  let fixture: ComponentFixture<DetailBloodGiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBloodGiverComponent]
    });
    fixture = TestBed.createComponent(DetailBloodGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
