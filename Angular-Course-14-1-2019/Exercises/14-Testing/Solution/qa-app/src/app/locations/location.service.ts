import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LocationService {

  private LOCATIONURL = 'http://localhost:3000/locationsResults';

  constructor(private http: HttpClient) { }

  getLocations() {
    return this.http.get(this.LOCATIONURL);
  }

}
