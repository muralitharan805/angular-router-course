import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { CourseComponent } from "../courses/course/course.component";

@Injectable({
  providedIn: 'root'
})
export class Conformexit implements CanDeactivate<CourseComponent> {
  // constructor( private auth:AuthStore,private router:Router ){

  // }
  canDeactivate(component: CourseComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return component.conformExit()

  }

}