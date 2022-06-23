import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.sass']
})
export class ProgramComponent implements OnInit {

  program = {
    code: '',
    name: '',
    coordinator: this.apiService.getName(),
    duration: '',
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProgramRequest() {
    const {code, name, coordinator, duration} = this.program;
    this.apiService.createProgramRequest(code, name, coordinator, duration)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/profile']);
    })
  }
}
