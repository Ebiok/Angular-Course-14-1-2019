import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InstructorsComponent } from './instructors/instructors.component';
import { CanDeactivateGuard } from './can-deactivate.guard';

const routes: Routes = [
    {path: 'instructors', component: InstructorsComponent }
]

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
