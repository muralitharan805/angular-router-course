import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonDetail } from '../model/lesson-detail';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class LessonDetailsResolverService implements Resolve<LessonDetail> {

  constructor(private courseServicw:CoursesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LessonDetail | Observable<LessonDetail> | Promise<LessonDetail> {

    const courseUrl= route.parent.paramMap.get('courseUrl'),
    lessonSeqNo=route.paramMap.get('lessonSeqNo')


    return this.courseServicw.loadLessonDetail(courseUrl,lessonSeqNo)

  }
}
