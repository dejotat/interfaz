import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API = "http://localhost:3000";

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  loginRequest(email: String, password: String) {
    return this.http.post<any>(`${this.API}/api/login`,
      { email: email, password: password }
    )
  }

  registerRequest(firstname: String, lastname: String, email: String, password: String, role: String) {
    return this.http.post<any>(`${this.API}/api/register`,
      { 
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        password2: password,
        role: role
      }
    )
  }

  logoutRequest() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('name');
    
    const token = this.getToken();
    return this.http.post<any>(`${this.API}/api/logout`, { token: token })
    .subscribe(res => {
      console.log(res)
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('role');
      localStorage.removeItem('name');
      this.router.navigate(['/login']);
    })
  }

  isAuth(): boolean {
    if(localStorage.getItem('token')){
      return true;
    } else {
      return false;
    }
  }

  getRole() {
    if(localStorage.getItem('role')){
      return localStorage.getItem('role');
    } else {
      return ''
    }
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getName() {
    if(localStorage.getItem('name')){
      return localStorage.getItem('name');
    } else {
      return ''
    }
  }

  getId() {
    return localStorage.getItem('id');
  }

  getProfile(token: any) {
    return this.http.post<any>(`${this.API}/api/profile`, { token: token })
  }

  createAttendanceRequest(author: any, idAuthor: any, evento: String, students: String, difficulties: string) {
    return this.http.post<any>(`${this.API}/api/asistencia/create`,
     { author: author, idAuthor: idAuthor, evento: evento, students: students, difficulties: difficulties })
  }

  createProgramRequest(code: String, name: String, coordinator: any, duration: String) {
    return this.http.post<any>(`${this.API}/api/programa/create`,
     { code: code, name: name, coordinator: coordinator, duration: duration })
  }

  createSubjectRequest(teacher: String, name: String, code: String, intensity: String, programa: String, schedule: String) {
    return this.http.post<any>(`${this.API}/api/evento/create`,
      { teacher: teacher, name: name, code: code, intensity: intensity, programa: programa, schedule: schedule })
  }

  getTeachers() {
    return this.http.get<any>(`${this.API}/api/teachers`)
  }

  getPrograms() {
    return this.http.get<any>(`${this.API}/api/programa/all`)
  }
}