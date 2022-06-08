import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './components/list-students/list-students.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ViewStudentComponent } from './components/view-student/view-student.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    ViewStudentComponent
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
