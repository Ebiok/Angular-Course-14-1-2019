import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

import { Observable ,  throwError as _throw } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-course-browse',
  templateUrl: './course-browse.component.html',
  styleUrls: ['./course-browse.component.css']
})
export class CourseBrowseComponent implements OnInit {

  courses;
  displayCourses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses().pipe(
      catchError(err => {
        if (err.error instanceof Error) {
           alert(`An error occurred: ${err.error.message}`);
         }
         else {
           alert(`Backend return code: ${err.status} error: ${err.message}`);
         }
        return _throw(err);
      })
    );
  }

  navToEdit(code: string) {
    this.router.navigate(['../edit', {code}], {relativeTo: this.activatedRoute})
  }

}
