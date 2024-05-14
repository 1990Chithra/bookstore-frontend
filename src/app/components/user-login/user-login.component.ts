import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  searchText:string="";

 constructor(private fb:FormBuilder,private api:ApiService,private route:Router){}

 loginForm=this.fb.group({
  email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
  password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
 })

 login(){
  if(this.loginForm.valid){
    
    const email=this.loginForm.value.email
    const password=this.loginForm.value.password
  
    console.log(email,password);
  
    const user= {email,password}
  
    this.api.userloginAPI(user).subscribe({
      next:(res:any)=>{
        console.log(res);
        const token=res.token
        sessionStorage.setItem('token',token)
        Swal.fire({
          title: 'Success!',
          text: 'Login successfull',
          icon: 'success',
          confirmButtonText: 'Back'
        })   
        this.route.navigateByUrl('/')
      },
      error:(err:any)=>{
        Swal.fire({
          title: 'Error!',
          text: 'Login Failed',
          icon: 'error',
          confirmButtonText: 'Back'
        })     
       }
    })
    }
    else{
      Swal.fire({
        title: 'Error!',
        text: 'Invalid Login',
        icon: 'error',
        confirmButtonText: 'Back'
      })
    }
 }
}