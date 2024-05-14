import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {

constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}

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

  this.api.userregisterAPI(user).subscribe({
    next:(res:any)=>{
      Swal.fire({
        title: 'Success!',
        text: 'Registration successfull',
        icon: 'success',
        confirmButtonText: 'Back'
      })    
      this.route.navigateByUrl('/user/login')
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
