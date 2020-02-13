import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class VenkatService {

  constructor(private router:Router) { }
  sendToken(token){
    localStorage.setItem('userDetails',token)
      }
      isLogin(){
        return localStorage.getItem('userDetails')!==null
      }
      logout(){
        localStorage.removeItem('userDetails')
      this.router.navigate(['login'])
      }
    }
    

