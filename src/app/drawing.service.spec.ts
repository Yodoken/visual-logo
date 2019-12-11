import { TestBed } from '@angular/core/testing';

import { DrawingService } from './drawing.service';

describe('DrawingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DrawingServiceService = TestBed.get(DrawingServiceService);
    expect(service).toBeTruthy();
  });
});
