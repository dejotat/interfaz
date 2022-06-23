import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ApiService } from './services/api.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private apiService: ApiService,
    private router: Router
  ){}

  canActivate(): boolean{
    if(this.apiService.isAuth()){
      return true;
    } else { 
      this.router.navigate(['/login']);
      return false;
    }
  }

}
