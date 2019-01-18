import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InstructorsModule } from './instructors/instructors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InstructorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
