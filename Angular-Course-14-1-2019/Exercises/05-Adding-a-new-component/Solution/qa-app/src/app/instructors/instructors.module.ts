import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsGalleryComponent } from './instructors-gallery/instructors-gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InstructorsGalleryComponent],
  exports: [InstructorsGalleryComponent]
})
export class InstructorsModule { }
