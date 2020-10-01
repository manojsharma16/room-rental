import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentSingleComponent } from './apartment-single.component';

describe('ApartmentSingleComponent', () => {
  let component: ApartmentSingleComponent;
  let fixture: ComponentFixture<ApartmentSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApartmentSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartmentSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
