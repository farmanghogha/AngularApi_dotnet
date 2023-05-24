import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStudent } from '../interface/student';


@Injectable({
  providedIn: 'root'
})
export class CurdapiService {
  baseapiurl = environment.roorapipath;
  constructor(private httpclient: HttpClient) { }
  // get all Student from database
  getstudent(): Observable<any> {
    return this.httpclient.get(this.baseapiurl + 'Getallstudent');
  }


  // Add Student in database
  addstudent(student: IStudent): Observable<any> {
    return this.httpclient.post(this.baseapiurl + 'Addstudent', student);
  }
  //get student by id
  editstudent(id: number): Observable<any> {
    return this.httpclient.get(this.baseapiurl + 'editstudent/?id=' + id);
  }
 // Edit Student in database 
  updatestudent(student: IStudent): Observable<any> {
    return this.httpclient.put(this.baseapiurl + 'updatestudent', student);
  }

 // delete student from database
  deletestudent(id: number): Observable<any> {
    return this.httpclient.delete(this.baseapiurl + 'deletestudent/?id=' + id);
  }
}
