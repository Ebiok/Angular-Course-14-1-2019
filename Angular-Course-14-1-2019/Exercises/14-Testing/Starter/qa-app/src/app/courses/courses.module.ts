import { CommonModule } from '@angular/common';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CourseBrowseComponent } from './course-browse/course-browse.component';
import { CoursesComponent } from './courses.component';
import { CourseRoutingModule } from './course-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CourseRoutingModule,
    SharedModule
  ],
  declarations: [CourseEditorComponent, CourseBrowseComponent, CoursesComponent],
  exports: [CourseEditorComponent]
})
export class CoursesModule { }
