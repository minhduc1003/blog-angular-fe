import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayOfAuthorComponent } from './day-of-author.component';

describe('DayOfAuthorComponent', () => {
  let component: DayOfAuthorComponent;
  let fixture: ComponentFixture<DayOfAuthorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DayOfAuthorComponent]
    });
    fixture = TestBed.createComponent(DayOfAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
