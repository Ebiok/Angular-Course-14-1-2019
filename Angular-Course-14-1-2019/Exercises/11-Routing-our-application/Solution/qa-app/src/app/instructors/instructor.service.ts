import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class InstructorService {

  private readonly INSTRUCTORURL: string = 'http://localhost:3000/instructorResults';

  constructor(private http: HttpClient) { }

  getInstructors() {
    return this.http.get(this.INSTRUCTORURL);
  }
}
