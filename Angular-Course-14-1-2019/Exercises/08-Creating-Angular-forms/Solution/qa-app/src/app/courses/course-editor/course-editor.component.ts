import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
    selector: 'app-course-editor',
    templateUrl: './course-editor.component.html',
    styleUrls: ['./course-editor.component.css']
})
export class CourseEditorComponent implements OnInit {

    courses: Course[] = [
        {
            'id': 1,
            'title': 'Building JavaScript Applications Using NodeJS and the MEAN Stack',
            'code': 'qanodedev',
            'delivery': 'Classroom',
            'days': 3,
            // tslint:disable-next-line:max-line-length
            'description': 'In this course you will learn how to leverage javascript in end to end application development using javascript. Using NodeJS and the MEAN stack you will learn how to build open source modular and component based web applications to build service driven application with a single web page user interface'
        },
        {
            'id': 2,
            'title': 'Developing MVC single-page web applications using AngularJS',
            'code': 'QAAngularJS',
            'delivery': 'Classroom',
            'days': 2,
            // tslint:disable-next-line:max-line-length
            'description': 'Google\'s Angular framework (often referred to as Angular 2) is the next iteration of the widely known AngularJS framework which allows developers to build smart client-side applications that enhance the user experience. This course is a practical walk-through for both those entirely new to Angular and those coming from AngularJS; and leverages the power of TypeScript to help build highly scalable applications.'
        },
        {
            'id': 3,
            'title': 'Developing Web Applications Using HTML5',
            'code': 'QAWebUI',
            'delivery': 'Classroom',
            'days': 5,
            // tslint:disable-next-line:max-line-length
            'description': 'HTML5 is the emerging future of web development supported in all modern browsers. A suite of connected technologies leverage HTML, Javascript and CSS to create a high performance web application without the need for plugin technology and with reduced calls to servers. This course takes developers with some experience of the core technologies into this brave new world whilst supporting the legacy technologies that most organisations must still support where you will learn best practice, how to utilise modern scripting libraries and migrate yourself and your organisation into the next wave of web applications.'
        },
        {
            'id': 4,
            'title': 'Leveraging the Power of JQuery',
            'code': 'QAJQuery',
            'delivery': 'Classroom',
            'days': 3,
            // tslint:disable-next-line:max-line-length
            'description': '\'Write less, do more!\' is the moto of the jQuery JavaScript development team. The free open source development platform is an essential skill for any web site. Leveraging the power of jQuery will teach you how to integrate jQuery into existing sites, understand how it works and send you on your first steps of jQuery application development. Developed as a vendor neutral course it is suitable for existing Javascript developers or experienced web application developers. The course focuses on understanding and building with jQuery and examining some of the most useful extensions to the core, such as jQueryUI and a variety of plugins allowing a developer to hit the ground running as soon as the course is over.'
        },
        {
            'id': 5,
            'title': 'Programming with JavaScript',
            'code': 'QAJAVSC',
            'delivery': 'Classroom',
            'days': 5,
            // tslint:disable-next-line:max-line-length
            'description': 'From the simplest webpage to complex Enterprise scale web applications Javascript is an essential skill for any developer or designer. This course takes an in-depth look, from first principals in how to effectively program javascript through to best practices for large scale reusable code libraries'
        },
        {
            'id': 6,
            'title': 'Next Generation JavaScript: ECMAScript2015',
            'code': 'qaES2015',
            'delivery': 'Classroom',
            'days': 2,
            // tslint:disable-next-line:max-line-length
            'description': 'ECMAScript 2015 (6th Edition) is the first update to the specification since 2009 and adds in significant new features and capabilities to the language. This course looks at how we can utilise new syntax, constructs, objects and methods in order to develop your applications in new, cleaner, faster ways.'
        },
        {
            'id': 7,
            'title': 'Building Web Applications Using Angular',
            'code': 'QAAngular',
            'delivery': 'Classroom',
            'days': 3,
            // tslint:disable-next-line:max-line-length
            'description': 'Google\'s AngularJS JavaScript framework allows web developers to create smart clients creating rich decision making User Interfaces that enhance your end users experience. In this two-day practical course, we will teach you how to implement MVC applications using AngularJS and leverage the modern developer toolbox that includes Yeoman, Gulp and NPM.'
        }
    ];
    selectedCourse: Course;

    constructor() { }

    ngOnInit() {
    }


    onSubmit() {
        console.log('Submitting course');
        console.dir(this.selectedCourse);
    }

}
