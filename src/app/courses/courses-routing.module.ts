import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { Conformexit } from '../services/conformexit';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseResolverService } from './services/course-resolver.service';
import { LessonDetailService } from './services/lesson-detail.service';
import { LessonResolver } from './services/LessonResolver';


const routes: Routes = [

  {
    path:"",
    component:HomeComponent
  },
  {
    path:":courseUrl",
    component:CourseComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    canDeactivate:[Conformexit],
    children:[
      {
        path:"",
        component:LessonsListComponent,
        resolve:{
          lessons:LessonResolver
        }
      },
      {
        path:"lessons/:lessonSeqNo",
        component:LessonDetailComponent,
        resolve:{
          lesson:LessonDetailService

        }
      }
    ],
    resolve:{
      course:CourseResolverService
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolverService,
    LessonResolver,
    LessonDetailService,
    AuthGuard,
    Conformexit
  ]
})
export class CoursesRoutingModule {



}
