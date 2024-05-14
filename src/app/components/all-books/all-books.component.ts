import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit{

  allBooks:any[]=[]
  searchText:string=""
  
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getBooks()
  }

  getBooks(){

    this.api.getAllBooksAPI().subscribe((books:any)=>{
      console.log(books);
      this.allBooks=books;
    })
  }
  sortbyName(){
    this.allBooks.sort((a:any,b:any)=>a.bookName.localeCompare(b.bookName))
  }
  sortbyId(){
    this.allBooks.sort((a:any,b:any)=>a.id-b.id)
  }
  
 
    
   }
 


