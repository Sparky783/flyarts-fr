import { TestBed } from '@angular/core/testing';

import { AgeService } from './age.service';

describe('AgeService', () => {
  let service: AgeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: []
    });
    service = TestBed.inject(AgeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
