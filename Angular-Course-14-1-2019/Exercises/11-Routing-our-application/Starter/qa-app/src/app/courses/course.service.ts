import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from './course.model';

@Injectable({
    providedIn: 'root'
})
export class CourseService {

  private readonly COURSEURL: string = 'http://localhost:3000/coursesResults'

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get(this.COURSEURL);
  }

  submitCourse(course: Course) {
    return this.http.put(`${this.COURSEURL}/${course.id}`, course);
  }
}
