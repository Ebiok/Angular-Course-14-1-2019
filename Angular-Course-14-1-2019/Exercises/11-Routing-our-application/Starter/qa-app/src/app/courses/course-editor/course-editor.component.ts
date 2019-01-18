import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

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

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      response => {
        this.courses = response as Course[];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert(`An error occurred: ${err.error.message}`);
        } else {
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
        if (err.error instanceof Error) {
          alert(`An error occured: ${err.error.message}`);
        } else {
          alert(`Backend return error code: ${err.status}. DATA NOT SAVED`)
        }
      }
    );
  }
}
