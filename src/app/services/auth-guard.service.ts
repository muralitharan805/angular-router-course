import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {

  constructor(
    private auth:AuthStore,
    private router:Router
  ) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.auth.isLoggedIn$
    .pipe(
      map(
        loggedin=>loggedin ? true : this.router.parseUrl('/login')
      )
    )
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {


    return this.auth.isLoggedIn$
      .pipe(
        map(
          loggedin=>loggedin ? true : this.router.parseUrl('/login')
        )
      )
  }
}
