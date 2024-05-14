import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url="http://localhost:3000"


  constructor(private http:HttpClient) { }

  adminregisterAPI(user:any){
   return this.http.post(`${this.base_url}/admin/register`,user)
  }
  adminloginAPI(user:any){
    return this.http.post(`${this.base_url}/admin/login`,user)
   }
  userregisterAPI(user:any){
    return this.http.post(`${this.base_url}/user/register`,user)
   }
  userloginAPI(user:any){
     return this.http.post(`${this.base_url}/user/login`,user)
    }
  getAllUsersAPI(){
      return this.http.get(`${this.base_url}/all-users`)
  } 
  getAllBooksAPI(){
    return this.http.get(`${this.base_url}/all-books`)
  }  
  getABookAPI(id:any){
    return this.http.get(`${this.base_url}/view-book/${id}`)

  }
  appendToken(){
    let headers=new HttpHeaders()
    const token=sessionStorage.getItem('token')
    if(token){
      headers=headers.append('Authorization',`Bearer ${token}`)
    }
    return {headers}

  }
  addToFavoritesAPI(book:any){
    return this.http.post(`${this.base_url}/add-favorites`,book,this.appendToken())
  }
  getFavoritesAPI(){
    return this.http.get(`${this.base_url}/get-favorites`,this.appendToken())

  }
  deleteFavoritesAPI(id:any){
    return this.http.delete(`${this.base_url}/delete-favorites/${id}`,this.appendToken())

  }
  addToLibrariesAPI(book:any){
    return this.http.post(`${this.base_url}/add-libraries`,book,this.appendToken())
  }
  getLibrariesAPI(){
    return this.http.get(`${this.base_url}/get-libraries`,this.appendToken())

  }
  deleteLibraryAPI(id:any){
    return this.http.delete(`${this.base_url}/delete-libraries/${id}`,this.appendToken())

  }
  incrementLibraryAPI(id:any){
    return this.http.get(`${this.base_url}/increment-libraries/${id}`,this.appendToken())

  }
  decrementLibraryAPI(id:any){
    return this.http.get(`${this.base_url}/decrement-libraries/${id}`,this.appendToken())

  }
  addBookAPI(book:any){
   
    return this.http.post(`${this.base_url}/add-book`,book,this.appendToken())

  }
  deleteBookAPI(id:any){
    return this.http.delete(`${this.base_url}/delete-book/${id}`,this.appendToken())

  }
  addToPdfAPI(book:any){
    return this.http.post(`${this.base_url}/add-pdfs`,book,this.appendToken())
  }
  getPdfAPI(){
    return this.http.get(`${this.base_url}/get-pdfs`,this.appendToken())

  }
 

}
