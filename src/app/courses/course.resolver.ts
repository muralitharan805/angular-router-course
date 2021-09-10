import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";


@Injectable()
export class CourseResolver implements Resolve<Course>{


  constructor( private courses:CoursesService ){


  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
   Observable<Course> {

    
   const courseUrl= route.paramMap.get('courseUrl')
   console.log('courseUrl ',courseUrl);

  return  this.courses.loadCourseByUrl(courseUrl).pipe(
    tap(console.log
    )
  )
  }

}