import { TestBed } from '@angular/core/testing';

import { EmployeeSubjectService } from './employee-subject-service';

describe('EmployeeSubjectService', () => {
  let service: EmployeeSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
