import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from '../services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  /**
   *
   */
  constructor(private accountService: AccountService, private router:Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>{
      console.log('Inside the Can Activate method of Auth Guard');
      return this.accountService.isLoggedIn.pipe(map(response => {
        if(response) {
          return true;
        }
        else {
          this.router.navigate(["/account/login"])
          return false;
        }
      }));
  }
  
}
