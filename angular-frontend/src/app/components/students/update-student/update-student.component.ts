import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/common/students/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student = new Student();
  id!: number;

  constructor(private studentService: StudentService, 
    private router: Router,
    private route: ActivatedRoute) { }

  batch!: Array<any>;
  branch!: Array<any>;
  role!: Array<any>;

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];
    this.getBatchList();
    this.getBranchList();
    this.getRoleList()
    this.studentService.getStudentById(this.id)
    .subscribe(data =>{
      this.student = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student)
    .subscribe(data =>{
      this.listStudents();
      alert(data?.message);
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
  
}
