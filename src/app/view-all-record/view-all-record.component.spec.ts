import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllRecordComponent } from './view-all-record.component';

describe('ViewAllRecordComponent', () => {
  let component: ViewAllRecordComponent;
  let fixture: ComponentFixture<ViewAllRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAllRecordComponent]
    });
    fixture = TestBed.createComponent(ViewAllRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
