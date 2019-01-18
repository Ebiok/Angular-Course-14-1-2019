import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { allowedCourseCodeValidator } from '../allowed-course-codes.directive';

import { Course, courses } from '../course.model';

@Component({
  selector: 'app-course-editor',
  templateUrl: './course-editor.component.html',
  styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent {
  courseForm: FormGroup;
  courses: Course[];
  course: Course;

  constructor(private fb: FormBuilder) {
    this.courses = courses;
    this.createForm();
    this.onChanges();
  }

  createForm() {
    this.courseForm = this.fb.group({
      title: '',
      code: ['', [Validators.required, allowedCourseCodeValidator(/[Q]{1}[A]{1}[A-Z]{3,}/i)]],
      delivery: ['', Validators.required],
      days: [null, [Validators.required, Validators.min(1)]]
    });
  }

  onChanges(): void {
    this.courseForm.get('title').valueChanges.subscribe(value => {
      for (const course of courses) {
        if (course.title === value) {
          this.course = course;
        }
      }
      if (this.course) {
        this.courseForm.patchValue({
          code: this.course.code,
          delivery: this.course.delivery,
          days: this.course.days
        });
      }
    });
  }

  get code() { return this.courseForm.get('code')}
  get delivery() { return this.courseForm.get('delivery')}
  get days() { return this.courseForm.get('days')}

  onSubmit() {
      this.course = this.prepareCourse();
      console.log('Submitting course');
      console.dir(this.course);
      this.onChanges()
  }

  prepareCourse(): Course {
    const formModel = this.courseForm.value;
    const saveCourse: Course = {
      id: this.course.id,
      title: this.course.title,
      code: formModel.code as string,
      delivery: formModel.delivery as string,
      days: formModel.days as number
    };
    return saveCourse;
  }
}
