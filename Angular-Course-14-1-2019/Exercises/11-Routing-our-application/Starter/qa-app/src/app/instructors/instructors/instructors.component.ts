import { Component, OnInit } from '@angular/core';
import { Instructor } from 'app/instructors/instructors.model';
import { HttpErrorResponse } from '@angular/common/http'
import { CourseService } from '../../courses/course.service';
import { Course } from '../../courses/course.model';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  
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
          alert(`An error occurred: ${err.error.message}`);
        }
        else {
          alert(`Backend return code: ${err.status}, error was: ${err.error}`);
        }
      }
    );
  }

  
  doInstructorChange(instructor: Instructor): void {
    this.displayCourses = this.courses.filter(course => instructor.courses.includes(course.code));
  }

}
