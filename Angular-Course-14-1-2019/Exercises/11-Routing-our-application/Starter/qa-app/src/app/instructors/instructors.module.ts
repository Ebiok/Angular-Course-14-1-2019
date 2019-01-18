import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsGalleryComponent } from './instructors-gallery/instructors-gallery.component';
import { InstructorService } from './instructor.service';
import { SharedModule } from 'app/shared/shared.module';
import { InstructorsComponent } from './instructors/instructors.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [InstructorsGalleryComponent, InstructorsComponent],
  exports: [InstructorsGalleryComponent]
})
export class InstructorsModule { }
