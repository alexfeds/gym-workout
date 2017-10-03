import { TestBed, inject } from '@angular/core/testing';

import { BicepsService } from './biceps.service';

describe('BicepsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BicepsService]
    });
  });

  it('should be created', inject([BicepsService], (service: BicepsService) => {
    expect(service).toBeTruthy();
  }));
});
