import { TestBed, inject } from '@angular/core/testing';

import { AtilaApiService } from './atila-api.service';

describe('AtilaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtilaApiService]
    });
  });

  it('should be created', inject([AtilaApiService], (service: AtilaApiService) => {
    expect(service).toBeTruthy();
  }));
});
