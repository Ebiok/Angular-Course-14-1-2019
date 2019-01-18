import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { FormsModule } from '@angular/forms';
import { AllowedCourseCodesDirective } from './allowed-course-codes.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CourseEditorComponent]
  export: [CourseEditorComponent]
})
export class CoursesModule { }
