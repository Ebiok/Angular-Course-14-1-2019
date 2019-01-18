import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllowedCourseCodesDirective } from './allowed-course-codes.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CourseEditorComponent, AllowedCourseCodesDirective],
  exports: [CourseEditorComponent]
})
export class CoursesModule { }
