import { Injectable } from '@angular/core';
import {Observable, pipe, throwError} from "rxjs";
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import {catchError, map} from "rxjs/operators";
import { Student } from '../common/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/student-record/"
  private batchURL = "http://localhost:8080/batch/get-all-batches"
  private branchURL = "http://localhost:8080/branch/get-all-branches"
  private roleURL = "http://localhost:8080/role/get-all-roles"

  constructor(private httpClient: HttpClient) { }

  handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      const userMessage = error.error; // should give error body

      return throwError(userMessage);
    };
  }

  getStudentList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}` + `get-all-student-records`);
  }

  createStudent(student: Student): Observable<any>{
    return this.httpClient.post(`${this.baseURL}` + `create-student-record`, student)
      .pipe(map((m: any) => m), catchError(this.handleError('err')));
  }

  getStudentById(id: number): Observable<Student>{
  return this.httpClient.get<Student>(`${this.baseURL}` + `get-student-record/${id}`);
  }

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}` + `update-student-record/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}` + `soft-delete-student-record/${id}`, id);
  }

  getBatchList(): Observable<any>{
    return this.httpClient.get<any>(`${this.batchURL}`);
  }

  getBranchList(): Observable<any>{
    return this.httpClient.get<any>(`${this.branchURL}`);
  }

  getRoleList(): Observable<any>{
    return this.httpClient.get<any>(`${this.roleURL}`);
  }

}

