import { TestBed } from '@angular/core/testing';

import { TarkovApiService } from './tarkov-api.service';

describe('TarkovApiService', () => {
  let service: TarkovApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarkovApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
