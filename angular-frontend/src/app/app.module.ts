import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { CreateStudentComponent } from './components/students/create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './components/students/update-student/update-student.component';
import { ViewStudentComponent } from './components/students/view-student/view-student.component';
import { ListEmployeesComponent } from './components/employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './components/employees/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employees/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './components/employees/view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ViewStudentComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // need this for ngModel
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
