import { TestBed } from '@angular/core/testing';

import { TerapiasService } from './terapias.service';

describe('TerapiasService', () => {
  let service: TerapiasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerapiasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
