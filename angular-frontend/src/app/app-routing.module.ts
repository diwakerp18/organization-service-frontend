import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

const routes: Routes = [
  {path: 'students', component: ListStudentsComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full' },
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'view-student/:id', component: ViewStudentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
