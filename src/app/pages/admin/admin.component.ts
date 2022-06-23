import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Teacher {
  _id: string;
  firstname: string;
  lastname: string;
  salary: number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  teachers: Teacher[] = []

  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
     this.http.get<any>(`${this.apiService.API}/api/teachers`)
      .subscribe(res => {
        this.teachers = res
      })
  }
}
