import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAssignment } from './employee-assignment';

describe('EmployeeAssignment', () => {
  let component: EmployeeAssignment;
  let fixture: ComponentFixture<EmployeeAssignment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeAssignment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAssignment);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
