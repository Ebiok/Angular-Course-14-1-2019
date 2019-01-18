import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorGalleryComponent } from './instructor-gallery/instructor-gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InstructorGalleryComponent],
  exports: [InstructorsGalleryComponent]

})
export class InstructorsModule { }
