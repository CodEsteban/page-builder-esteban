import { TestBed } from '@angular/core/testing';

import { SelectedBoxService } from './selected-box.service';

describe('SelectedBoxService', () => {
  let service: SelectedBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
