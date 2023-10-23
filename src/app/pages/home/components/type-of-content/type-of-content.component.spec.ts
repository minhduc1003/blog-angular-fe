import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfContentComponent } from './type-of-content.component';

describe('TypeOfContentComponent', () => {
  let component: TypeOfContentComponent;
  let fixture: ComponentFixture<TypeOfContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeOfContentComponent]
    });
    fixture = TestBed.createComponent(TypeOfContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
