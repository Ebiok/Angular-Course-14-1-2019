import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationService } from './location.service';
import { LocationsBrowseComponent } from './locations-browse/locations-browse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LocationsBrowseComponent]
})
export class LocationsModule { }
