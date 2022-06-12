import { Injectable } from '@angular/core';
import {Observable, pipe, throwError} from "rxjs";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import { Employee } from '../../common/employees/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    private baseURL = "http://localhost:8080/employee-record/"
    private branchURL = "http://localhost:8080/branch/get-all-branches"
    private roleURL = "http://localhost:8080/role/get-all-roles"

    constructor(private httpClient: HttpClient) { }

    handleError<T> (operation = 'operation', result?: T) {
        return (error: HttpErrorResponse): Observable<T> => {

            const userMessage = error.error; // should give error body

            return throwError(userMessage);
        };
    }

    getEmployeeList(): Observable<any>{
        return this.httpClient.get<Employee[]>(`${this.baseURL}` + `get-all-employee-records`)
            .pipe(map((m: any) => m), catchError(this.handleError('err')));
    }

    createEmployee(employee: Employee): Observable<any>{
        return this.httpClient.post(`${this.baseURL}` + `create-employee-record`, employee)
            .pipe(map((m: any) => m), catchError(this.handleError('err')));
    }

    getEmployeeById(id: number): Observable<Employee>{
        return this.httpClient.get<Employee>(`${this.baseURL}` + `get-employee-record/${id}`);
    }

    updateEmployee(id: number, employee: Employee): Observable<any>{
        return this.httpClient.post(`${this.baseURL}` + `update-employee-record/${id}`, employee)
            .pipe(map((m: any) => m), catchError(this.handleError('err')));
    }

    deleteEmployee(id: number): Observable<any>{
        return this.httpClient.post(`${this.baseURL}` + `soft-delete-employee-record/${id}`, id)
            .pipe(map((m: any) => m), catchError(this.handleError('err')));
    }

    getBranchList(): Observable<any>{
        return this.httpClient.get<any>(`${this.branchURL}`);
    }

    getRoleList(): Observable<any>{
        return this.httpClient.get<any>(`${this.roleURL}`);
    }

}

