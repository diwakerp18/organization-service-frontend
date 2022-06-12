import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/common/employees/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  branch!: Array<any>;
  role!: Array<any>;

  ngOnInit(): void {
    this.getBranchList();
    this.getRoleList();
  }

  createEmployee(){
    this.employeeService.createEmployee(this.employee)
        .subscribe(data => {
              this.listEmployees();
              alert(data?.message);
            },
            error => (alert(error.errorMessage))
        );
  }

  listEmployees(){
    this.router.navigate(['/employees']);
  }

  getBranchList(){
    this.employeeService.getBranchList().subscribe(data =>{
      this.branch=data;
    });
  }

  getRoleList(){
    this.employeeService.getRoleList().subscribe(data =>{
      this.role=data;
    });
  }

  onSubmit(){
    this.createEmployee();
  }

}
