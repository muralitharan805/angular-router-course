import { Injectable } from "@angular/core";
import { CanLoad, Route, Router, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { first, tap } from "rxjs/operators";
import { AuthStore } from "./auth.store";

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor( private auth:AuthStore, private router:Router ){

  }
  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error("Method not implemented.");


    return this.auth.isLoggedIn$.pipe(
      first(),
      tap(
        loggedin=>{
          if(!loggedin){
            this.router.navigateByUrl('/login')
          }
        }
      )
    )
  }

}