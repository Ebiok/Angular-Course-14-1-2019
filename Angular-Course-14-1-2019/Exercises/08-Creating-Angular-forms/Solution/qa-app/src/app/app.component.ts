import { Component } from '@angular/core';
import { Instructor } from 'app/instructors/instructors.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    courses = [
        {
            "title": "Building JavaScript Applications Using NodeJS and the MEAN Stack",
            "code": "QANODEDEV",
            "delivery": "Classroom",
            "days": 3
        },
        {
            "title": "Developing MVC single-page web applications using AngularJS",
            "code": "QAANGULARJS",
            "delivery": "Classroom",
            "days": 2
        },
        {
            "title": "Developing Web Applications Using HTML5",
            "code": "QAWEBUI",
            "delivery": "Classroom",
            "days": 5
        },
        {
            "title": "Leveraging the Power of JQuery",
            "code": "QAJQUERY",
            "delivery": "Classroom",
            "days": 3
        },
        {
            "title": "Programming with JavaScript",
            "code": "QAJAVSC",
            "delivery": "Classroom",
            "days": 5
        },
        {
            "title": "Next Generation JavaScript: ECMAScript2015",
            "code": "QAES2015",
            "delivery": "Classroom",
            "days": 2
        },
        {
            "title": "Building Web Applications Using Angular",
            "code": "QAANGULAR",
            "delivery": "Classroom",
            "days": 3
        }
    ]

    displayCourses = [...this.courses];

    doInstructorChange(instructor: Instructor): void {
        this.displayCourses = this.courses.filter(course => instructor.courses.includes(course.code));
    }
}
