import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { CourseResolverService } from './services/course-resolver.service';
import { LessonResolver } from './services/LessonResolver';


const routes: Routes = [

  {
    path:"",
    component:HomeComponent
  },
  {
    path:":courseUrl",
    component:CourseComponent,
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
        component:LessonDetailComponent
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
    LessonResolver
  ]
})
export class CoursesRoutingModule {



}
