import { Component } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http'

import { Instructor } from 'app/instructors/instructors.model';
import { CourseService } from './courses/course.service';
import { Course } from './courses/course.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: Course[] = [];
  displayCourses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      response => {
        this.courses = response as Course[];
        this.displayCourses = this.courses;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("An error occurred: ", err.error.message);
        }
        else {
          console.log(`Backend return code ${err.status}, error was: ${err.error}`);
        }
      }
    );
  }

  doInstructorChange(instructor: Instructor): void {
    this.displayCourses = this.courses.filter(course => instructor.courses.includes(course.code));
  }

}
