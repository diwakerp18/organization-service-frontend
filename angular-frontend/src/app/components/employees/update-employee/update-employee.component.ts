import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Employee} from "../../../common/employees/employee";
import {EmployeeService} from "../../../services/employee/employee.service";

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id!: number;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) { }

  branch!: Array<any>;
  role!: Array<any>;

  ngOnInit(): void {
    // retrieve id from route
    this.id = this.route.snapshot.params['id'];
    this.getBranchList();
    this.getRoleList()
    this.employeeService.getEmployeeById(this.id)
        .subscribe(data =>{
          this.employee = data;
        },error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee)
        .subscribe(data =>{
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

}
