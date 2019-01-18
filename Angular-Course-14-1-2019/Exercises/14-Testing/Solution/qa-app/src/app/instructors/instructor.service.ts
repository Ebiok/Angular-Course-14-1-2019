import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Instructor } from './instructors.model';

@Injectable({
    providedIn: 'root'
})
export class InstructorService {

  private INSTRUCTORURL = 'http://localhost:3000/instructorResults';

  constructor(private http: HttpClient) { }

  getInstructors() {
    return this.http.get<Instructor[]>(this.INSTRUCTORURL);
  }
}
