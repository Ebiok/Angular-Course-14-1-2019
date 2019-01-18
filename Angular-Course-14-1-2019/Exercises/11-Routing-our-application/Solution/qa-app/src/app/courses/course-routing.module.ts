import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CourseBrowseComponent } from './course-browse/course-browse.component';
import { CoursesComponent } from './courses.component';
import { CourseEditorComponent } from './course-editor/course-editor.component';

let routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    children: [
      {path: 'browse', component: CourseBrowseComponent},
      {path: 'edit', component: CourseEditorComponent},
      {path: 'edit/:code', component: CourseEditorComponent}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
