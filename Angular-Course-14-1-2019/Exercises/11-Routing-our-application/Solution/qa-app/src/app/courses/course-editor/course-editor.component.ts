import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { flatMap } from 'rxjs/operators';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {

  courses: Course[];
  selectedCourse: Course;

  constructor(private courseService: CourseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.courseService.getCourses()
      .pipe(
        flatMap(response => {
          this.courses = response as Course[];
          return this.activatedRoute.params;
        })
      )
      .subscribe(
        (params: Params) => {
          this.selectedCourse = this.courses.find(course => course.code === params['code']);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            alert(`An error occurred: ${err.error.message}`);
          }
          else {
            alert(`Backend return code: ${err.status}, error was: ${err.error}`);
          }
        }
      );
  }

  onSubmit() {
    this.courseService.submitCourse(this.selectedCourse).subscribe(
      response => {
        alert(`Data saved`);
      },
      (err: HttpErrorResponse) => {
        if(err.error instanceof Error) {
          alert(`An error occured: ${err.error.message}`);
        }
        else {
          alert(`Backend return error code: ${err.status}. DATA NOT SAVED`)
        }
      }
    );
  }
}
