import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeService} from "../../../services/employee/employee.service";
import {Employee} from "../../../common/employees/employee";

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  employees!: Employee[];

  ngOnInit(): void {
    this.getEmployeeList();
  }

  private getEmployeeList(){
    this.employeeService.getEmployeeList().subscribe(data =>{
          this.employees=data;
        },
        error => (alert(error.errorMessage))
    );
  }

  updateEmployee(id: number){
    // event handler expects route and id
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe (data =>{
          this.getEmployeeList();
          alert(data?.message);
        },
        error => (alert(error.errorMessage))
    );
  }

  viewEmployee(id:number){
    this.router.navigate(['view-employee',id]);
  }

}
