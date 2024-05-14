import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pdfs',
  templateUrl: './pdfs.component.html',
  styleUrls: ['./pdfs.component.css']
})
export class PdfsComponent implements OnInit {


  constructor(private api:ApiService,private route:ActivatedRoute){}

  allpdf: any=[];
  ngOnInit(): void {
    
    this.getPdf()
  }
  
getPdf(){
    this.api.getPdfAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allpdf=res;
      },
      error:(err:any)=>{
        console.log("error",err);
        
      }
    })
  }
  
}

