import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Teacher {
  _id: string;
  firstname: string;
  lastname: string;
}

interface Program {
  code: string;
  name: string;
}

interface Subject {
  code: string
  name: string
  program: string
  schedule: string
}

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.sass']
})
export class SubjectComponent implements OnInit {

  teachers: Teacher[] = []
  programs: Program[] = []
  subjects: Subject[] = []

  subject = {
    teacher: "",
    name: "",
    code: "",
    intensity: "",
    program: "",
    schedule: "",
  };

  constructor(
    private apiService: ApiService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<Teacher[]>(`${this.apiService.API}/api/teachers`)
    .subscribe(res => {
      this.teachers = res
      console.log(this.teachers)
    })
    this.http.get<Program[]>(`${this.apiService.API}/api/programa/all`)
    .subscribe(res => {
      this.programs = res;
      console.log(this.programs)
    })
    this.http.get<Subject[]>(`${this.apiService.API}/api/evento/all`)
    .subscribe(res => this.subjects = res)
  }

  createSubjectRequest() {
    const {teacher, name, code, intensity, program, schedule} = this.subject;
    console.log("THIS: ", this.subject)
    this.apiService.createSubjectRequest(teacher, name, code, intensity, program, schedule)
    .subscribe(res => {
      console.log(res)
      this.router.navigate(['/subject']);
      window.location.reload();
    })
  }
}
