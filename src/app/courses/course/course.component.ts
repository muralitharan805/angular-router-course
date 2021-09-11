import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Course} from '../model/course';


@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    course: Course;

    couponCode: string;


    constructor(private route:ActivatedRoute) {


    }

    ngOnInit() {
        console.log('resolve com');
        
        this.course=this.route.snapshot.data['courses']

    }


    confirmExit(){
        confirm(`Are You Sure You Want To Exit `)
        return false
    }


}











