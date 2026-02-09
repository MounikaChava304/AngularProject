import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSubject } from './employee-subject';

describe('EmployeeSubject', () => {
  let component: EmployeeSubject;
  let fixture: ComponentFixture<EmployeeSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeSubject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeSubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
