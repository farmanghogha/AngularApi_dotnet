import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IStudent } from 'src/app/interface/student';
import { CurdapiService } from 'src/app/services/curdapi.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {

 studentData:IStudent[] = []; 
 

  constructor(
    private http:CurdapiService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.http.getstudent().subscribe({
      next:(res)=>{
        debugger
        this.spinner.hide();
        this.studentData=res.data;        
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }


  onDelete(id:number){

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.deletestudent(id).subscribe({
         next:(res)=>{
          this.ngOnInit();
         },
         error:(err)=>{
            console.log(err);
          }
        });
       
      }
    })


  }
}
