import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { InstructorService } from './instructor.service';
import { Instructor } from './instructors.model';

describe('InstructorService', () => {
  let injector;
  let service: InstructorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InstructorService]
    });

    injector = getTestBed();
    service = injector.get(InstructorService);
    httpMock = injector.get(HttpTestingController);
  });

  describe('#getInstructors', () => {
    it('should return an Observable<Instructor[]>', () => {
      const dummyInstructors: Instructor[] = [
        {firstname: "Test1", surname: "Test2", courses: ["Test3", "Test4"], location: "Test5", bio: "Test6", src:"Test7"},
        {firstname: "Test8", surname: "Test9", courses: ["Test10", "Test11"], location: "Test12", bio: "Test13", src:"Test14"},
      ];

      service.getInstructors().subscribe(instructors => {
        expect(instructors).toEqual(dummyInstructors)
      });

      const req = httpMock.expectOne(`http://localhost:3000/instructorResults`);
      expect(req.request.method).toBe('GET');
      req.flush(dummyInstructors);
    })
  })
});
