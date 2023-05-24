import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CurdapiService } from 'src/app/services/curdapi.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  addstud:FormGroup;

  constructor(
    private fb:FormBuilder,
    private httpservice:CurdapiService,
    private route:Router,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.addstud = this.fb.group({
      name :['',[Validators.required]],
      age:['',[Validators.required]],
      phone:['',[Validators.required]],
    });
  }

  onSave(){
    if(this.addstud.invalid){
      return;
    }
    else{
     this.httpservice.addstudent(this.addstud.value).subscribe({
       next:(response)=>{  
         this.toastr.success('Add Student Successfully......', '');       
         this.route.navigate(['/student']);
       },
       error:(err)=>{
          console.log(err);
       }
     });
    }
  }

}
