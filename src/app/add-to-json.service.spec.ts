import { TestBed, inject } from '@angular/core/testing';

import { AddToJsonService } from './add-to-json.service';

describe('AddToJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToJsonService]
    });
  });

  it('should be created', inject([AddToJsonService], (service: AddToJsonService) => {
    expect(service).toBeTruthy();
  }));
});
