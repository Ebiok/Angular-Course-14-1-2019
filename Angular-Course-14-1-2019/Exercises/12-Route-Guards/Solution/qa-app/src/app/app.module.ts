import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseService } from './courses/course.service';
import { CoursesModule } from './courses/courses.module';
import { InstructorsModule } from './instructors/instructors.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InstructorsModule,
    CoursesModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
