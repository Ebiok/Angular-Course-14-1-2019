export class Course {

    id: number;
    title: string;
    code: string;
    delivery: string;
    days: number;
    description?: string;

    constructor() {}
}

export const courses: Course[] = [
    {
        'id': 1,
        'title': 'Building JavaScript Applications Using NodeJS and the MEAN Stack',
        'code': 'QANODEDEV',
        'delivery': 'Classroom',
        'days': 3
    },
    {
        'id': 2,
        'title': 'Developing MVC single-page web applications using AngularJS',
        'code': 'QAANGULARJS',
        'delivery': 'Classroom',
        'days': 2
    },
    {
        'id': 3,
        'title': 'Developing Web Applications Using HTML5',
        'code': 'QAWEBUI',
        'delivery': 'Classroom',
        'days': 5
    },
    {
        'id': 4,
        'title': 'Leveraging the Power of JQuery',
        'code': 'QAJQUERY',
        'delivery': 'Classroom',
        'days': 3
    },
    {
        'id': 5,
        'title': 'Programming with JavaScript',
        'code': 'QAJAVSC',
        'delivery': 'Classroom',
        'days': 5
    },
    {
        'id': 6,
        'title': 'Next Generation JavaScript: ECMAScript2015',
        'code': 'QAES2015',
        'delivery': 'Classroom',
        'days': 2
    },
    {
        'id': 7,
        'title': 'Building Web Applications Using Angular',
        'code': 'QAANGULAR',
        'delivery': 'Classroom',
        'days': 3
    }
];
