import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user = {
    email: "",
    password: ""
  }

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.apiService.isAuth()){
      this.router.navigate(['/profile'])
    }
  }

  login() {
    console.log("login...", this.user)
    const {email, password} = this.user
    this.apiService.loginRequest(email, password)
    .subscribe(res => {
      if(res.isAuth) {
        console.log("res log", res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('id', res.id);
        localStorage.setItem('role', res.role);
        localStorage.setItem('name', res.name);
        this.router.navigate(['/profile']);
      } else {
        console.log(res);
      }
    })
  }
}
