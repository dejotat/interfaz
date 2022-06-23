import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { AuthGuard } from './auth.guard';
import { AttendanceCreateComponent } from './pages/attendance-create/attendance-create.component';
import { ProgramComponent } from './pages/program/program.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { ProgrammingComponent } from './pages/programming/programming.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    PageNotFoundComponent,
    AttendanceCreateComponent,
    ProgramComponent,
    SubjectComponent,
    ProgrammingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
