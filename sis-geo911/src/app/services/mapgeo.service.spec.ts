import { TestBed } from '@angular/core/testing';

import { MapgeoService } from './mapgeo.service';

describe('MapgeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapgeoService = TestBed.get(MapgeoService);
    expect(service).toBeTruthy();
  });
});
