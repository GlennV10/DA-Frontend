import { TestBed, inject } from '@angular/core/testing';

import { SandwichesService } from './sandwiches.service';

describe('SandwichesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SandwichesService]
    });
  });

  it('should be created', inject([SandwichesService], (service: SandwichesService) => {
    expect(service).toBeTruthy();
  }));
});
