import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsGalleryComponent } from './instructors-gallery/instructors-gallery.component';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule
    ],
    declarations: [InstructorsGalleryComponent],
    exports: [InstructorsGalleryComponent]
})
export class InstructorsModule { }
