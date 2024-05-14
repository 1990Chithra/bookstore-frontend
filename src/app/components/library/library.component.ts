import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
import { Router } from '@angular/router';


@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit{

  public payPalConfig?: IPayPalConfig;
  showSuccess:boolean=false;
  paymentStatus:boolean=false;



  libraries:any[]=[];
  totalPrice=0;

  constructor(private api:ApiService,private route:Router){}
  ngOnInit(): void {
    this.getLibraryBook()
    this.getPaymentTotal()
    this.initConfig();

  }

  getLibraryBook(){
    this.api.getLibrariesAPI().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.libraries=res;
        this.getPaymentTotal()
        
      },
      error:(err=>{
        console.log(err);
        
      })

    })
  }
  deleteLibrary(id:any){
    this.api.deleteLibraryAPI(id).subscribe((res:any)=>{
      console.log(res);
      alert("Product deleted successfully")
      this.getLibraryBook()
    })
  }

  getPaymentTotal(){
    let total=0
    this.libraries.forEach((item:any)=>{
      total+=item.grandTotal
      this.totalPrice=Math.ceil(total)
    })
    
  }
  libraryIncrement(id:any){
    this.api.incrementLibraryAPI(id).subscribe((res:any)=>{
        this.libraries=res;
        this.getPaymentTotal()
    })
  }
  libraryDecrement(id:any){
    this.api.decrementLibraryAPI(id).subscribe((res:any)=>{
        this.libraries=res;
        this.getPaymentTotal()
    })
  }
  private initConfig(): void {
    this.payPalConfig = {
    currency: 'EUR',
    clientId: 'sb',
    createOrderOnClient: (data) => <ICreateOrderRequest>{
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '9.99'
              }
            }
          },
          items: [
            {
              name: 'Enterprise Subscription',
              quantity: '1',
              category: 'DIGITAL_GOODS',
              unit_amount: {
                currency_code: 'EUR',
                value: '9.99',
              },
            }
          ]
        }
      ]
    },
    advanced: {
      commit: 'true'
    },
    style: {
      label: 'paypal',
      layout: 'vertical'
    },
    onApprove: (data, actions) => {
      console.log('onApprove - transaction was approved, but not authorized', data, actions);
      actions.order.get().then((details:any) => {
        console.log('onApprove - you can get full order details inside onApprove: ', details);
      });
    },
    onClientAuthorization: (data) => {
      console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      this.showSuccess = true;
    },
    onCancel: (data, actions) => {
      console.log('OnCancel', data, actions);
    },
    onError: err => {
      console.log('OnError', err);
    },
    onClick: (data, actions) => {
      console.log('onClick', data, actions);
    },
  };
  }
  makePayment(){
    this.paymentStatus=true;
  }
  logout(){
    sessionStorage.clear()
    this.route.navigateByUrl("/")
  }
}
