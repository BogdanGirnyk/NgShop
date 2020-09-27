import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree, CanLoad, Route, UrlSegment, CanActivateChild, Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/shared/services/users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(private usersService: UsersService, private router: Router) { }
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
    return this.checkIsAdminAndRedirect();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIsAdminAndRedirect();
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIsAdminAndRedirect();
  }
  checkIsAdminAndRedirect(): boolean {
    const isAdmin = this.usersService.isAdmin;
    if (!isAdmin) {
      this.redirect();
    }
    return isAdmin;
  }
  redirect() {
    this.router.navigateByUrl('/notfound');
  }
}
