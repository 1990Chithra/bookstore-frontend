import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  book:any={}
  constructor(private api:ApiService,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.viewBook()
    this.addToLibrary(this.book)
  }
  viewBook(){
  
    this.route.params.subscribe((res:any)=>{
      console.log(res);

      const {id}=res;
      console.log(id);
    this.api.getABookAPI(id).subscribe((res:any)=>{
     console.log(res);
     this.book=res;
         
    })
  })
  }
  addToFavorites(){
    if(sessionStorage.getItem('token')){
      this.api.addToFavoritesAPI(this.book).subscribe({
        next:(res:any)=>{
          alert('added to favorite')
        },
        error:(err)=>{
          alert('already in favorites')
        }
      })
    }
    else{
      alert('please login again')
    }
  }
  addToLibrary(book:any){
    Object.assign(book,{quantity:1})
    console.log(book);
    this.api.addToLibrariesAPI(book).subscribe((res:any)=>{
    console.log(res);
    alert(res)


      
    })
    
  }
}

