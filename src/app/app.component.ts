import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  user = {
    name: localStorage.getItem('name'),
    role: localStorage.getItem('role')
  }

  constructor (
    public apiService: ApiService,
    private router: Router
  ){}
    
  ngOnInit(){
   
  }
}
