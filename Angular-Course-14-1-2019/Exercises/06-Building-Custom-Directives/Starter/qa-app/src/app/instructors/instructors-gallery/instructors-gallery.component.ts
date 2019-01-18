import { Component, OnChanges, EventEmitter, Output, Input } from '@angular/core';
import { Instructor } from '../instructors.model';

@Component({
    selector: 'app-instructors-gallery',
    templateUrl: './instructors-gallery.component.html',
    styleUrls: ['./instructors-gallery.component.css']
})
export class InstructorsGalleryComponent implements OnChanges {

    instructors: Instructor[] = [
        {
            "firstname": "Adrian",
            "surname": "Jakeman",
            "courses": [
                "QAANGULARJS",
                "QAES2015",
                "QAJQUERY",
                "QAWEBUI"
            ],
            "location": "London",
            "bio": "Adrian has worked in the IT and education industries for the past 25 years and joined QA in 2006 with a focus on the development and delivery of training around Visual Studio, Team Foundation Server and the software development lifecycle. Still to be found in the classroom delivering training around Application Lifecycle Management, he is also responsible for the day-to-day management of QA’s IT curriculum. He has particular focus on the quality, breadth, depth and relevance of both vendor-produced courses and the extensive QA-authored portfolio. Areas of expertise: Teaching and learning effectiveness, Application Lifecycle Management, Cloud computing, Team Foundation Server.",
            "src": "adrian.png"
        },
        {
            "firstname": "Laurence",
            "surname": "Sharp",
            "courses": [
                "QAJAVSC",
                "QAJQUERY",
                "QAWEBUI"
            ],
            "location": "London",
            "bio": "Having been a chartered surveyor with computing as a hobby, Laurence made a midlife career choice and joined QA in 1994. Originally specialising in desktop applications and end user training he is now a principal consultant in the internet and web technologies area and has been the lead trainer on several key projects with responsibility for overall training design and delivery. As well as delivering courses in most of the web technologies he has also developed several of the QA authored technical and client specific courses. Laurence is constantly researching and exploring the exiting technologies that are appearing in the internet and web development solution area and gets a lot of satisfaction in passing this new information on to our delegates.",
            "src": "laurence.png"
        },
        {
            "firstname": "David",
            "surname": "Walker",
            "courses": [
                "QANODEDEV",
                "QAANGULARJS",
                "QAJAVSC",
                "QAJQUERY",
            ],
            "location": "Edinburgh",
            "bio": "David is a change driven technologist who continually looks to adapt and expand his knowledge and understanding of his field. Over the least eighteen years David has led technology and training companies through emerging fields and technology trends helping them to understand the future and develop business opportunities. As Head of Emerging Technologies he works closely with customers and industry experts to ensure the opportunities and threats of new technology trends designing custom learning solutions to help small and enterprise organisation adapt and make the most of their people - ensuring QA is ready when our customers need to navigate the minefield of the fast moving digital landscape. His passion is in advanced web engineering principals and vendor neutral thick client design/development technologies reflected in his research, analysis and courseware development experience combined with his training delivery skills. As a technologist he is the lead instructor and syllabus author for web development technologies and specialising in Agile, DevOps, and User Experience driven approaches to developing solutions. He has authored courses such as HTML5, Responsive Web Development, User Experience, NodeJS, Javascript and jQuery.",
            "src": "david.png"
        },
        {
            "firstname": "Katrina",
            "surname": "McIvor",
            "courses": [
                "QADEVOPPRAC",
                "QAANGULAR",
                "QAANGULARJS",
                "QAJAVSC"
            ],
            "location": "Birmingham",
            "bio": "Katrina joined QA in the summer of 2014. Before working for QA she was involved in teaching and research, firstly at The University of Birmingham, where she completed her PhD in Computer Science (specialising in agents and AI), and then at Aston University, where she was a lecturer and ran the programming support office. She has around six years' experience teaching individuals, small groups and large lecture audiences. Katrina is a published researcher both nationally and internationally specialising in AI, agents and robotics. Katrina is passionate about all things technical and specialises in teaching Java, Scala, Web Technologies and DevOps within QA.",
            "src": "kat.jpg"
        }
    ];
    selectedInstructor: Instructor;

    @Input('thumbnails')
    thumbnailTShirtSize = "s";

    @Output('change')
    instructorChange = new EventEmitter<Instructor>();


    constructor() { }

    ngOnChanges(evt) {
        if (typeof this.thumbnailTShirtSize !== "string") {
            return this.thumbnailTShirtSize = "75px";
        }

        switch (this.thumbnailTShirtSize.toLowerCase()) {
            case "s": {
                console.log('s');
                this.thumbnailStyles.width = "75px";
                break
            }
            case "m": {
                console.log('m');
                this.thumbnailStyles.width = "100px";
                break
            }
            case "l": {
                console.log('l');
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

    thumbnailStyles = {
        width: "75px"
    }
}
