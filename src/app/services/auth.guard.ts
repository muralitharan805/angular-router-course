import {Inject, Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { AuthStore } from "./auth.store";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private auth:AuthStore,private router:Router ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // throw new Error("Method not implemented.");
    return this.auth.isLoggedIn$
      .pipe(
        map(
          loggedin=>loggedin?true:this.router.parseUrl('/login')
        )
      )
  }
}