import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/common/student';
import { StudentService } from 'src/app/services/student.service';

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

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id)
    .subscribe(data =>{
      this.student = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudent(this.id, this.student)
    .subscribe(data =>{
      this.listStudents();
    },error => console.log(error));
  }

  listStudents(){
    this.router.navigate(['/students']);
  }
  
}
