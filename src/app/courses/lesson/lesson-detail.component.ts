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

  lesson$: Observable<LessonDetail>;

  constructor(private route:ActivatedRoute,private router:Router) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    // const lesson = new BehaviorSubject<LessonDetail>(null)
    // this.lesson$ = lesson.asObservable()

    // this.lesson$ = this.route.snapshot.data['lesson'];
  
    this.lesson$ = this.route.data.pipe(map(data => data["lesson"]));

  }


  next(ele:any){
    this.router.navigate(['lessons',ele.seqNo+1], {relativeTo: this.route.parent } )

  }


  previous(ele:any){

    this.router.navigate(['lessons',ele.seqNo-1], {relativeTo: this.route.parent } )
  }
}
