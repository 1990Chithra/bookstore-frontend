import { Component} from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent{

  constructor(private api:ApiService,private fb:FormBuilder,private route:Router){}
  
  addForm=this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]*')]],
    bookName:['',[Validators.required]],
    authorName:['',[Validators.required]],
    image:['',[Validators.required]],
    category:['',[Validators.required]],
    price:['',[Validators.required,Validators.pattern('[0-9]*')]],
    description:['',[Validators.required]],
    rate:['',[Validators.required,Validators.pattern('[0-9.]*')]],
    count:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pdfUrl:['',[Validators.required]],

    
    
   })

  addBook(){
    if(this.addForm.valid){
      const id=this.addForm.value.id
      const bookName=this.addForm.value.bookName
      const authorName=this.addForm.value.authorName
      const image=this.addForm.value.image
      const category=this.addForm.value.category
      const price=this.addForm.value.price
      const description=this.addForm.value.description
      const rate=this.addForm.value.rate
      const count=this.addForm.value.count
      const pdfUrl=this.addForm.value.pdfUrl
      
    
      console.log(id,bookName,authorName,image,category,price,description,rate,count,pdfUrl);
    
      const book= {id,bookName,authorName,image,category,price,description,rating:{rate,count},pdfUrl}
      this.api.addBookAPI(book).subscribe((res:any)=>{
      console.log(res);
      alert("Book added successfully")
      this.route.navigateByUrl('/admin/dashboard')

      })
    
      }
      else{
        alert('Invalid form')
      }
      
  } 
  

}
