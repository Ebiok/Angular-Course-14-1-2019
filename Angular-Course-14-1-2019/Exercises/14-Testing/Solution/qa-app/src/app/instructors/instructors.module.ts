import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsComponent } from './instructors.component';
import { InstructorsGalleryComponent } from './instructors-gallery/instructors-gallery.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InstructorsComponent, InstructorsGalleryComponent],
  exports: [InstructorsGalleryComponent]
})
export class InstructorsModule { }
