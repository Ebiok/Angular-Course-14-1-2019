import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsGalleryComponent } from './instructors-gallery/instructors-gallery.component';
import { InstructorsComponent } from './instructors.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [InstructorsGalleryComponent, InstructorsComponent],
  exports: [InstructorsGalleryComponent]
})
export class InstructorsModule { }
