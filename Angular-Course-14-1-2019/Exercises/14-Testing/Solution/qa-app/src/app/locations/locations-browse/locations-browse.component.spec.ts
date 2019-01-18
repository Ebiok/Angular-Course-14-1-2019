import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { LocationsBrowseComponent } from './locations-browse.component';
import { QALocation } from '../location.model';
import { LocationService } from '../location.service';

describe('LocationsBrowseComponent', () => {
  let component: LocationsBrowseComponent;
  let fixture: ComponentFixture<LocationsBrowseComponent>;
  let locationServiceSpy;
  let locationService;
  const DUMMYLOCATIONS: QALocation[] = [
    {location: 'Location 1', mapUrl: 'http://someLocation1', mapSrc: 'some/path/to/location1'},
    {location: 'Location 2', mapUrl: 'http://someLocation2', mapSrc: 'some/path/to/location2'},
    {location: 'Location 3', mapUrl: 'http://someLocation3', mapSrc: 'some/path/to/location3'}
  ];

  beforeEach(async(() => {
    locationServiceSpy = {getLocations: jasmine.createSpy('getLocations').and.callFake(() =>
      Observable.create(observer => {
        observer.next(DUMMYLOCATIONS);
      })
    )}
    TestBed.configureTestingModule({
      declarations: [ LocationsBrowseComponent ],
      providers: [{ provide: LocationService, useValue: locationServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    locationService = fixture.debugElement.injector.get(LocationService) as any;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLocations', () => {
      expect(locationService.getLocations.calls.count()).toBe(1, 'getLocations called');
  });

  it ('should set the locations prop to be an array of locations', () => {
      expect(component.locations).toEqual([
        {location: 'Location 1', mapUrl: 'http://someLocation1', mapSrc: 'some/path/to/location1'},
        {location: 'Location 2', mapUrl: 'http://someLocation2', mapSrc: 'some/path/to/location2'},
        {location: 'Location 3', mapUrl: 'http://someLocation3', mapSrc: 'some/path/to/location3'}
      ]);
  });
});
