import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseResolver } from './course.resolver';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailsResolverService } from './services/lesson-details-resolver.service';
import { LessonResolverService } from './services/lesson.resolver.service';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },{
    path:":courseUrl",
    component:CourseComponent,
    children:[
      {
        path:"",
        component:LessonsListComponent,
        resolve:{
          lessons:LessonResolverService
        }
      },
      {
        path:"lessons/:lessonSeqNo",
        component:LessonDetailComponent,
        resolve:{
          lesson:LessonDetailsResolverService
        }
      }
    ],
    resolve:{
      courses:CourseResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonResolverService,
    LessonDetailsResolverService
  ]
})
export class CoursesRoutingModule {



}
