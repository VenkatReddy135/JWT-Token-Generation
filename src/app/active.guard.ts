import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { VenkatService } from './venkat.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  constructor(private router:Router,private venkatservice:VenkatService){}
      canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean  {
        if(this.venkatservice.isLogin()){
    return true
        }else{
    this.router.navigate(['login'])
        }
    
  }
  
}
