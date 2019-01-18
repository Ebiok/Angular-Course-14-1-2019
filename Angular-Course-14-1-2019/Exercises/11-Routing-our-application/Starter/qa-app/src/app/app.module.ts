import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//import { AppRoutingModule } from './instructors/app-routing.module;
import { AppComponent } from './app.component';
import { CourseService } from './courses/course.service';
import { CoursesModule } from './courses/courses.module';
import { InstructorsModule } from './instructors/instructors.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoursesModule,
    InstructorsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
