import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../courses/model/course';
import { CoursesService } from '../courses/services/courses.service';

@Injectable({
  providedIn: 'root'
})
export class CourseResolverService implements Resolve<Course> {

  constructor(private courses:CoursesService ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course | Observable<Course> | Promise<Course> {
    // throw new Error('Method not implemented.');

    const courseUrl = route.paramMap.get("courseUrl")
    return this.courses.loadCourseByUrl(courseUrl)
  }
}
