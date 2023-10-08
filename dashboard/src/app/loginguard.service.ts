import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '@ng-mf/data-access';
import { Observable, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {
  isLoggedIObserver$ = this.userService.isUserLoggedIn$;
  isLoggedIn = false; 
  constructor(private router: Router, private userService:UserService) { 
    this.isLoggedIObserver$
    .pipe(distinctUntilChanged())
    .subscribe(async (loggedIn) => {
      // Queue the navigation after initialNavigation blocking is completed
      setTimeout(() => {
        if (!loggedIn) {
          this.isLoggedIn = false;          

        } else {
          this.isLoggedIn = true;          
        }
      });
    }); 
  }

  canActivate(): boolean {
    // Check if the user is logged in (you can implement your logic here)
   if(!this.isLoggedIn)
    this.router.navigate(["login"]);
    
    return this.isLoggedIn;
  }
}
