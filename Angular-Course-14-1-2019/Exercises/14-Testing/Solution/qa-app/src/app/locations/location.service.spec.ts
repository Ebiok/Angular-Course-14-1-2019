import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LocationService } from './location.service';
import { QALocation } from './location.model';

describe('LocationService', () => {

  let service: LocationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LocationService]
    });

    service = TestBed.get(LocationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([LocationService], (service: LocationService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a getLocations() method', inject([LocationService], (service: LocationService) => {
    expect(service.getLocations).toEqual(jasmine.anything());
  }));

  describe ('#getLocations', () => {
    it('should return an Observable<Location>', () => {
      const dummyLocations: QALocation[] = [
        {location: 'Test1', mapUrl: 'Test2', mapSrc: 'Test3'},
        {location: 'Test4', mapUrl: 'Test5', mapSrc: 'Test6'},
      ];

      service.getLocations().subscribe(locations => {
        expect(locations).toEqual(dummyLocations);
      });

      const req = httpMock.expectOne(`http://localhost:3000/locationsResults`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyLocations);
    })
  });
});
