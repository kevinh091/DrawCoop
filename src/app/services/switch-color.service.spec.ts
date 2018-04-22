import { TestBed, inject } from '@angular/core/testing';

import { SwitchColorService } from './switch-color.service';

describe('SwitchColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwitchColorService]
    });
  });

  it('should be created', inject([SwitchColorService], (service: SwitchColorService) => {
    expect(service).toBeTruthy();
  }));
});
