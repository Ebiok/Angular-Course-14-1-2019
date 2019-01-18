import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CourseEditorComponent } from './course-editor/course-editor.component';
import { CourseBrowseComponent } from './course-browse/course-browse.component';
import { CoursesComponent } from './courses.component';
import { AdminGuard } from '../users/admin.guard';
import { CanDeactivateGuard } from '../can-deactivate.guard';

let routes: Routes = [
    {
        path: 'courses', 
        component: CoursesComponent,
        children: [
            { path: 'edit', component: CourseEditorComponent, canActivate: [AdminGuard], canDeactivate: [CanDeactivateGuard] },
            { path: 'browse', component: CourseBrowseComponent }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)

    ],
    declarations: [],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
