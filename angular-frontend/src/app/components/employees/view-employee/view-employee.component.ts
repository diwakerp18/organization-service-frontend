import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Employee} from "../../../common/employees/employee";
import {EmployeeService} from "../../../services/employee/employee.service";

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  id!: number;
  employee!: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee = data;
    },error => console.log(error));
  }

  listEmployees(){
    this.router.navigate(['/employees']);
  }

}
