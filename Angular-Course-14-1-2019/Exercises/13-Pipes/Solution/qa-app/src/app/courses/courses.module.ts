import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { FormsModule } from '@angular/forms';
import { CourseBrowseComponent } from './course-browse/course-browse.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CoursesRoutingModule
  ],
  declarations: [CourseEditorComponent, CourseBrowseComponent, CoursesComponent],
  exports: [CourseEditorComponent]
})
export class CoursesModule { }
