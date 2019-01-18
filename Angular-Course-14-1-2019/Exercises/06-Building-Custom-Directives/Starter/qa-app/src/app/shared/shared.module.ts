import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreyscaleDirective } from './directives/grey-Scale.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GreyscaleDirective],
  exports: [GreyscaleDirective]
})
export class SharedModule { }
