import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Instructor } from '../instructors.model';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-instructors-gallery',
  templateUrl: './instructors-gallery.component.html',
  styleUrls: ['./instructors-gallery.component.css']
})
export class InstructorsGalleryComponent implements OnInit, OnChanges {

  instructors: Instructor[];
  selectedInstructor: Instructor;

  thumbnailStyles = {
    width: '75px'
  }

  // tslint:disable-next-line:no-input-rename
  @Input('thumbnails')
  thumbnailTShirtSize = 's';

//   @Output('change')
  instructorChange = new EventEmitter<Instructor>();

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
    this.instructorService.getInstructors().subscribe(
      response => {
        this.instructors = response as Instructor[];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('An error occurred: ', err.error.message);
        } else {
          console.log(`Backend return code ${err.status}, error was: ${err.error}`);
        }
      }
    );
  }

  ngOnChanges(evt) {
    if (typeof this.thumbnailTShirtSize !== 'string') {
      return this.thumbnailTShirtSize = '75px';
    }

    switch (this.thumbnailTShirtSize.toLowerCase()) {
      case 's': {
        this.thumbnailStyles.width = '75px';
        break
      }
      case 'm': {
        this.thumbnailStyles.width = '100px';
        break
      }
      case 'l': {
        this.thumbnailStyles.width = '150px';
        break
      }
      default: {
        this.thumbnailStyles.width = '75px';
      }
    }
  }

  selectInstructor(instructor) {
    this.selectedInstructor = instructor;
    this.instructorChange.emit(instructor);
  }
}
