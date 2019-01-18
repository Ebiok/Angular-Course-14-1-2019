import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Instructor } from '../instructors.model';
import { InstructorService } from '../instructor.service';

import { Observable ,  throwError as _throw } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-instructors-gallery',
  templateUrl: './instructors-gallery.component.html',
  styleUrls: ['./instructors-gallery.component.css']
})
export class InstructorsGalleryComponent implements OnInit, OnChanges {

  instructors: Observable<Instructor[]>;
  selectedInstructor: Instructor;

  thumbnailStyles = {
    width: "75px"
  }

  @Input('thumbnails')
  thumbnailTShirtSize = "s";

  @Output('change')
  instructorChange = new EventEmitter<Instructor>();

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
    this.instructors = this.instructorService.getInstructors().pipe(
      catchError(err => {
        if (err.error instanceof Error) {
           alert(`An error occurred: ${err.error.message}`);
         }
         else {
           alert(`Backend return code: ${err.status} \nError: ${err.message}`);
         }
        return _throw(err);
      })
    );
  }

  ngOnChanges(evt) {
    if (typeof this.thumbnailTShirtSize !== "string") {
      return this.thumbnailTShirtSize = "75px";
    }

    switch (this.thumbnailTShirtSize.toLowerCase()) {
      case "s": {
        this.thumbnailStyles.width = "75px";
        break
      }
      case "m": {
        this.thumbnailStyles.width = "100px";
        break
      }
      case "l": {
        this.thumbnailStyles.width = "150px";
        break
      }
      default: {
        this.thumbnailStyles.width = "75px";
      }
    }
  }

  selectInstructor(instructor) {
    this.selectedInstructor = instructor;
    this.instructorChange.emit(instructor);
  }
}
