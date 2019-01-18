import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { InstructorsModule } from './instructors/instructors.module';
import { CoursesModule } from './courses/courses.module';
import { UsersModule } from './users/users.module';
import { LocationsModule } from './locations/locations.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InstructorsModule,
    CoursesModule,
    UsersModule,
    AppRoutingModule,
    LocationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
