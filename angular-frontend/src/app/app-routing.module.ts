import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/students/create-student/create-student.component';
import { ListStudentsComponent } from './components/students/list-students/list-students.component';
import { UpdateStudentComponent } from './components/students/update-student/update-student.component';
import { ViewStudentComponent } from './components/students/view-student/view-student.component';
import {ListEmployeesComponent} from "./components/employees/list-employees/list-employees.component";
import {CreateEmployeeComponent} from "./components/employees/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/employees/update-employee/update-employee.component";
import {ViewEmployeeComponent} from "./components/employees/view-employee/view-employee.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'employees', component: ListEmployeesComponent},
  {path: 'create-employee', component: CreateEmployeeComponent},
  {path: 'update-employee/:id', component: UpdateEmployeeComponent},
  {path: 'view-employee/:id', component: ViewEmployeeComponent},
  {path: 'students', component: ListStudentsComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'view-student/:id', component: ViewStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
