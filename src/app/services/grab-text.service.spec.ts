import { TestBed, inject } from '@angular/core/testing';

import { GrabTextService } from './grab-text.service';

describe('GrabTextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GrabTextService]
    });
  });

  it('should be created', inject([GrabTextService], (service: GrabTextService) => {
    expect(service).toBeTruthy();
  }));
});
