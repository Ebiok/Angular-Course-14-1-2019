import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorsComponent } from './instructors.component';
import { InstructorsGalleryComponent } from './instructors-gallery/instructors-gallery.component';
import { InstructorService } from './instructor.service';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [InstructorsComponent, InstructorsGalleryComponent],
  exports: [InstructorsGalleryComponent],
})
export class InstructorsModule { }
