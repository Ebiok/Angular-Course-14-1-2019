import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CourseEditorComponent],
  exports: [CourseEditorComponent]
})
export class CoursesModule { }
