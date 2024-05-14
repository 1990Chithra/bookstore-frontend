import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.css']
})
export class FavoriteBooksComponent implements OnInit{

  constructor(private api:ApiService,private route:ActivatedRoute){}
  favoritesArray:any=[];
  pdfStatus:boolean=false;

  ngOnInit(): void {
    this.getFavoriteBook()
  }
getFavoriteBook(){
  this.api.getFavoritesAPI().subscribe({
    next:(res:any)=>{
      console.log(res);
      this.favoritesArray=res
    },
    error:(err:any)=>{
      console.log("error",err);
      
    }
  })
}

deleteFavoriteBook(id:any){
  this.api.deleteFavoritesAPI(id).subscribe((res:any)=>{
      alert("Book deleted successfully")
      this.getFavoriteBook()
  })
}

addToPdf(book:any){
  this.api.addToPdfAPI(book).subscribe({
    next:(res:any)=>{
      console.log(res);
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })


  

}
}