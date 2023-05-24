import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetStudentComponent } from './components/get-student/get-student.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { EditStudentComponent } from './components/edit-student/edit-student.component';

const routes: Routes = [
  {path:'',component:GetStudentComponent},
  {path:'student',component:GetStudentComponent},
  {path:'addstudent',component:AddStudentComponent},
  {path:'editstudent/:id',component:EditStudentComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
