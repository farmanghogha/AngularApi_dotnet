import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IStudent } from 'src/app/interface/student';
import { CurdapiService } from 'src/app/services/curdapi.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editstud:FormGroup;
  // stddetails:IStudent={
  //   sId:0,
  //   name:'',
  //   phone:'',
  //   age:0

  // }

  constructor(
    private fb:FormBuilder,
    private httpservice:CurdapiService,
    private route:ActivatedRoute,
    private navigat:Router,
    private toastr: ToastrService 
    ){ }

  ngOnInit(): void {
    this.editstud = this.fb.group({
      sid:[''],
      name :['',[Validators.required]],
      age:['',[Validators.required]],
      phone:['',[Validators.required]],
    });

    this.route.paramMap.subscribe({   
      next:(par)=>{
      const id = par.get('id');
      
      if(id){
         this.httpservice.editstudent(Number.parseInt(id)).subscribe({
        next:(res)=>{            
            this.editstud.patchValue({
              "sid":res.sId,
              "name":res.name,
              "age":res.age,
              "phone":res.phone
            })
          },
          error:(err)=>{
            console.log(err);
          }
         });
       }
    }
    });
  }
  


  onUpdate(){
   this.httpservice.updatestudent(this.editstud.value).subscribe({
    next:(res)=>{
      this.toastr.success('Edit Student Successfully......', '');
      this.navigat.navigate(['/student']);   
    },
    error:(err)=>{
      console.log(err);
    }
   });
  }
}
