import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreyscaleDirective } from 'app/shared/directives/greyscale.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GreyscaleDirective],
  exports: [GreyscaleDirective]
})
export class SharedModule { }
