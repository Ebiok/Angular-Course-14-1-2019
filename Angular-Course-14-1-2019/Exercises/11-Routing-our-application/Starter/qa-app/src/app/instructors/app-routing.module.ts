import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsComponent} from "./instructors/instructors.component";
import { CourseEditorComponent } from 'app/courses/course-editor/course-editor.component';
import { RouterModule, Routes } from '@angular/router';

 let routes: Routes = [
   {path: 'instructors', component: InstructorsComponent},
   {path: 'editcourses', component: CourseEditorComponent}
 ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
