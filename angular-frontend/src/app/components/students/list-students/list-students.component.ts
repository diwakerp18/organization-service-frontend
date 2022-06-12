import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/common/students/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css']
})
export class ListStudentsComponent implements OnInit {

  constructor(private studentService: StudentService,
    private router: Router) { }

  students!: Student[];

  ngOnInit(): void {
    this.getStudentList();
  }

  private getStudentList(){
    this.studentService.getStudentList().subscribe(data =>{
      this.students=data;
    },
        error => (alert(error.errorMessage))
    );
  }

  updateStudent(id: number){
    // event handler expects route and id
    this.router.navigate(['update-student',id]);
  }

  deleteStudent(id: number){
    // delete student
    this.studentService.deleteStudent(id).subscribe (data =>{
    // return to student list
    this.getStudentList();
    alert(data?.message);
    },
        error => (alert(error.errorMessage))
    );
  }

  viewStudent(id:number){
    this.router.navigate(['view-student',id]);
  }

}
