import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseResolverService } from '../services/course-resolver.service';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {
    path:"",
    component:HomeComponent
  },
  {
    path:"courseUrl",
    component:CourseComponent,
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
    CourseResolverService
  ]
})
export class CoursesRoutingModule {



}
