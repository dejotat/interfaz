import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-create',
  templateUrl: './attendance-create.component.html',
  styleUrls: ['./attendance-create.component.sass']
})
export class AttendanceCreateComponent implements OnInit {

  att = {
    author: this.apiService.getName(),
    idAuthor: this.apiService.getId(),
    subject: "",
    students: "",
    difficulties: "",
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  attendanceRequest(){
    const {author, idAuthor, subject, students, difficulties} = this.att;
    this.apiService.createAttendanceRequest(author, idAuthor, subject, students, difficulties)
    .subscribe( res => {
     //console.log(res);
     this.router.navigate(['/profile']);
    })
  }

}
