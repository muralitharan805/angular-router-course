import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LessonDetail } from '../model/lesson-detail';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class LessonDetailService implements Resolve<LessonDetail> {

  constructor(private courses:CoursesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): LessonDetail | Observable<LessonDetail> | Promise<LessonDetail> {
    // throw new Error('Method not implemented.');

    const coursesUrl = route.parent.paramMap.get("courseUrl")
    const lessonSeqNo= route.paramMap.get("lessonSeqNo")

    return this.courses.loadLessonDetail(coursesUrl,lessonSeqNo)
  }
}
