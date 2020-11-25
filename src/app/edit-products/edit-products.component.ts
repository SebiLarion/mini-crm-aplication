import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {

  i:number;
  l:number;
  data: Object={};
  productObj:Object={};
  public prObj=[];
  public nrfact=[];

  constructor(
    private location: Location,
    private _productsService: ProductsService, 
    private http:HttpClient,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {

    this.i = +this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:3000/prod").subscribe(        
            (res:Response) => {
                   this.productObj=res;        
                   this.l=Object.keys(this.productObj).length;  
                   for(var j=0; j<this.l; j++){
                    this.prObj[j]=this.productObj[j].categoryid;
                    this.nrfact[j]=this.productObj[j].nrfact;
                   }
                   for(var j=0; j<this.l; j++){
                      if(parseInt(this.productObj[j].id)===this.i) {
                         this.data=this.productObj[j];
                         break;
                       }
                    }
              }); 
  }

  goBack(){
    this.location.back();
  }

  updateProd(){
   
    this._productsService.updateProd(this.i,this.data)
   .subscribe(()=>this.goBack());      
   }


}
