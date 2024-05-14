import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-profiles',
  templateUrl: './admin-profiles.component.html',
  styleUrls: ['./admin-profiles.component.css']
})
export class AdminProfilesComponent  implements OnInit{

  allUsers:any[]=[];


  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getAllUsers()

  }
 getAllUsers(){
    this.api.getAllUsersAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allUsers=res;
        
      },
      error:(err=>{
        console.log(err);
        
      })

    })
  }



}
