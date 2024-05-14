import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  allBooks:any[]=[]

  p: number = 1;

  constructor(private api:ApiService,private route:Router){}

  ngOnInit(): void {
    this.getBooks()
  }

  adminLoggedStatus:any=new Date()

  getBooks(){

    this.api.getAllBooksAPI().subscribe((books:any)=>{
      console.log(books);
      this.allBooks=books;
    })
  }
  deleteBook(id:any){
    this.api.deleteBookAPI(id).subscribe((res:any)=>{
      console.log(res);
      alert("Book deleted successfully")
      this.getBooks()

    })
  }
  sortbyName(){
    this.allBooks.sort((a:any,b:any)=>a.bookName.localeCompare(b.bookName))
  }
  sortbyId(){
    this.allBooks.sort((a:any,b:any)=>a.id-b.id)
  }
  generatepdf(){
    let pdf=new jsPDF()
    let head=[['id','bookName','authorName','category','price']]
    let body:any=[]
    this.allBooks.forEach((item:any)=>{
      body.push([item.id,item.bookName,item.authorName,item.category,item.price])
    })
    pdf.text("All Books",10,10)
    autoTable(pdf,{head,body})
    pdf.output("dataurlnewwindow")
    pdf.save("allbookslist.pdf")
  }

  
  logout(){
    sessionStorage.clear()
    this.route.navigateByUrl("/")
  }
}
