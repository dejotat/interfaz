import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  user = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "",
    salary: ""
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signup(){
    const {firstname, lastname, email, password, role} = this.user;
    this.apiService.registerRequest(firstname, lastname, email, password, role)
    .subscribe( res => {
      if(res.success) {
        this.router.navigate(['/profile']);
      } else {
        console.log(res);
      }
    })
  }
}
