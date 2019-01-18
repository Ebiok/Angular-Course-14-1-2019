import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreyscaleDirective } from 'app/shared/directives/greyscale.directive';
import { EllipsesPipe } from 'app/shared/pipes/ellipses.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GreyscaleDirective, EllipsesPipe],
  exports: [GreyscaleDirective, EllipsesPipe]
})
export class SharedModule { }
