import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();

  constructor(private studentService: StudentService,
    private router: Router) { }

  batch!: Array<any>;
  branch!: Array<any>;
  role!: Array<any>;

  ngOnInit(): void {
    this.getBatchList();
    this.getBranchList();
    this.getRoleList();
  }

  createStudent(){
    this.studentService.createStudent(this.student)
      .subscribe((result) => {
        this.listStudents();
        alert(result?.message);
    },
    error => (alert(error.errorMessage))
    );
  }

  listStudents(){
    this.router.navigate(['/students']);
  }

  getBatchList(){
    this.studentService.getBatchList().subscribe(data =>{
      this.batch=data;
    });
  }

  getBranchList(){
    this.studentService.getBranchList().subscribe(data =>{
      this.branch=data;
    });
  }

  getRoleList(){
    this.studentService.getRoleList().subscribe(data =>{
      this.role=data;
    });
  }

  onSubmit(){
    this.createStudent();
  }

}
