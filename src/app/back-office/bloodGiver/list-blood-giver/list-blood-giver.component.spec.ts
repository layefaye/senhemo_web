import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBloodGiverComponent } from './list-blood-giver.component';

describe('ListBloodGiverComponent', () => {
  let component: ListBloodGiverComponent;
  let fixture: ComponentFixture<ListBloodGiverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBloodGiverComponent]
    });
    fixture = TestBed.createComponent(ListBloodGiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
