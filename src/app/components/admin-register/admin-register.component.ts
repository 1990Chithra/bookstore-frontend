import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
 
constructor(private api:ApiService,private fb:FormBuilder,private route:Router){}
 registerForm=this.fb.group({
  username:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
  email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
 })
 register(){
  if(this.registerForm.valid){
  const username=this.registerForm.value.username
  const email=this.registerForm.value.email
  const password=this.registerForm.value.password

  console.log(username,email,password);

  const user= {username,email,password}

  this.api.adminregisterAPI(user).subscribe({
    next:(res:any)=>{
      Swal.fire({
        title: 'Success!',
        text: 'Registration successfull',
        icon: 'success',
        confirmButtonText: 'Back'
      })      
      this.route.navigateByUrl('/admin/login')
    },
    error:(err:any)=>{
      Swal.fire({
        title: 'Error!',
        text: 'Registration Failed',
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
  })
  }
  else{
    Swal.fire({
      title: 'Error!',
      text: 'Invalid Registration Form',
      icon: 'error',
      confirmButtonText: 'Back'
    })
  }
  
 }


}
