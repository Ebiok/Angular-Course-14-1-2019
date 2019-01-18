import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-browse',
  templateUrl: './course-browse.component.html',
  styleUrls: ['./course-browse.component.css']
})
export class CourseBrowseComponent implements OnInit {

  courses: Course[] = [];
  displayCourses: Course[] = [];

  constructor(private courseService: CourseService, private router: Router, private activatedRoute: ActivatedRoute) { }

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

  navToEdit(code: string) {
    this.router.navigate(['../edit', {code}], {relativeTo: this.activatedRoute})
  }

}
