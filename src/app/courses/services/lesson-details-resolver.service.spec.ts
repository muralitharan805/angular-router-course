import { TestBed } from '@angular/core/testing';

import { LessonDetailsResolverService } from './lesson-details-resolver.service';

describe('LessonDetailsResolverService', () => {
  let service: LessonDetailsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonDetailsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
