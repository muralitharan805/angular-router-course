import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"/courses",
    pathMatch:"full"

  },
  {
    path:"courses",
    loadChildren:()=>import('./courses/courses.module').then(m=>m.CoursesModule)
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  { path: 'demo_module2', loadChildren: () => import('./demo-module2/demo-module2.module').then(m => m.DemoModule2Module) },
  {
    path:"**",
    component:PageNotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [

  ]
})
export class AppRoutingModule {


}
