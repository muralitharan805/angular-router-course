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
        console.log("CourseComponent");
        

    }

    ngOnInit() {
        this.course=this.route.snapshot.data['course']
        this.couponCode=this.route.snapshot.queryParamMap.get("couponCode")

    }

    conformExit(){
        return  confirm(`Are You Sure You Want to Exit ${this.course.description}`)
    }


}











