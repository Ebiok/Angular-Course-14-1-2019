import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InstructorsModule } from './instructors/instructors.module';
import { GreyScaleDirective } from './grey-scale.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreyScaleDirective
  ],
  imports: [
    BrowserModule,
    InstructorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
