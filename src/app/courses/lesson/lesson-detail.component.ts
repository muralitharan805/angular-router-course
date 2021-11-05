import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonDetail} from "../model/lesson-detail";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  // private lessonobject = new BehaviorSubject<LessonDetail>();

  lesson$: Observable<LessonDetail>;

  constructor(private route:ActivatedRoute) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    console.log("LessonDetailComponent ",this.route.snapshot.data['lesson']);
    console.log("LessonDetailComponent ",typeof this.route.snapshot.data['lesson']);

    
    this.lesson$ =  Observable.create(oberver => oberver.next(this.route.snapshot.data['lesson'])) 
  }



}
