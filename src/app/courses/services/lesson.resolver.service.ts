import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { LessonSummary } from '../model/lesson-summary';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class LessonResolverService implements Resolve<LessonSummary[]> {

  constructor(private courseServicw:CoursesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LessonSummary[] | Observable<LessonSummary[]> | Promise<LessonSummary[]> {
    const courseUrl= route.paramMap.get('courseUrl')

    return this.courseServicw.loadAllCourseLessonsSummary(courseUrl)

  }
}
