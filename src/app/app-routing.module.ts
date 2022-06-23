import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AttendanceCreateComponent } from './pages/attendance-create/attendance-create.component';
import { ProgramComponent } from './pages/program/program.component';
import { SubjectComponent } from './pages/subject/subject.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'attendance-create', component: AttendanceCreateComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'subject', component: SubjectComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
