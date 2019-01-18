import { CommonModule } from '@angular/common';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CourseEditorComponent],
  exports: [CourseEditorComponent]
})
export class CoursesModule { }
