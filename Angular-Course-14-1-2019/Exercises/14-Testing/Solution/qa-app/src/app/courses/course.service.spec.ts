import { TestBed, inject } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CourseService } from './course.service';
import { Course } from './course.model';

describe('CoursesService', () => {
    let service: CourseService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CourseService]
        });

        service = TestBed.get(CourseService);
        httpMock = TestBed.get(HttpTestingController);
    });

    describe('#getCourses', () => {
        it('should return an Observable<Course[]>', () => {
            const dummyCourses: Course[] = [
                { id: 1, title: 'Test Course 1', code: 'TEST1', delivery: 'Classroom', days: 5, description: 'Test Description 1' },
                { id: 2, title: 'Test Course 2', code: 'TEST2', delivery: 'Classroom', days: 3, description: 'Test Description 2' }
            ];

            service.getCourses().subscribe(courses => {
                expect(courses).toEqual(dummyCourses);
            });

            const req = httpMock.expectOne(`http://localhost:3000/coursesResults`);
            expect(req.request.method).toBe('GET');
            req.flush(dummyCourses);
        });
    });

    describe('#submitCourse', () => {
        it('should make a PUT request with the supplied course', () => {
            const dummyCourse: Course = {
                id: 1,
                title: 'Test Course 1',
                code: 'TEST1',
                delivery: 'Classroom',
                days: 5,
                description: 'Some description of a course'
            };

            service.submitCourse(dummyCourse).subscribe();

            const req = httpMock.expectOne(`http://localhost:3000/coursesResults/1`);
            expect(req.request.method).toBe('PUT');
            expect(req.request.body).toEqual(dummyCourse);
            req.flush(dummyCourse);
        });
    });
});
