import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { CourseBrowseComponent } from './courses/course-browse/course-browse.component';
import { CourseEditorComponent } from './courses/course-editor/course-editor.component';
import { InstructorsComponent } from './instructors/instructors.component';

import { CanDeactivateGuard } from './can-deactivate.guard';

let routes: Routes = [
  {path: 'instructors', component: InstructorsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule { }
