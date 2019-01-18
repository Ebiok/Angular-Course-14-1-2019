import { Component } from '@angular/core';

import { Course, courses } from '../course.model';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent {
  courses: Course[];
  course: Course;

  constructor() {
    this.courses = courses;

  }
}
