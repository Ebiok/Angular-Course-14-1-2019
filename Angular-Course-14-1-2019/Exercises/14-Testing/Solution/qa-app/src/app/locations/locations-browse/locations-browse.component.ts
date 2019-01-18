import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LocationService } from '../location.service';
import { QALocation } from '../location.model';

@Component({
  selector: 'app-locations-browse',
  templateUrl: './locations-browse.component.html',
  styleUrls: ['./locations-browse.component.css']
})
export class LocationsBrowseComponent implements OnInit {

  locations: QALocation[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocations().subscribe(
      response => {
        this.locations = response as QALocation[];
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          alert(`An error occurred: ${err.error.message}`);
        } else {
          alert(`Backend return code: ${err.status}, error was: ${err.error}`);
        }
      }
    );
  }

}
