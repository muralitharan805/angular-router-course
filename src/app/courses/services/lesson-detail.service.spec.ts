import { TestBed } from '@angular/core/testing';

import { LessonDetailService } from './lesson-detail.service';

describe('LessonDetailService', () => {
  let service: LessonDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
