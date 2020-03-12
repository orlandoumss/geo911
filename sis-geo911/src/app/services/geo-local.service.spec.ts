import { TestBed } from '@angular/core/testing';

import { GeoLocalService } from './geo-local.service';

describe('GeoLocalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoLocalService = TestBed.get(GeoLocalService);
    expect(service).toBeTruthy();
  });
});
