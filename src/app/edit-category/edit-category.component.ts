import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ProductsService } from '../products.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  
  i:number;
  l:number;
  data: Object={};
  productObj:Object={};

  constructor(
    private location: Location,
    private _productsService: ProductsService, 
    private http:HttpClient,
    public route:ActivatedRoute,
  ) { }

  ngOnInit() {
    this.i = +this.route.snapshot.paramMap.get('id');
    this.http.get("http://localhost:5555/prodCateg").subscribe(        
            (res:Response) => {
                   this.productObj=res;        
                   this.l=Object.keys(this.productObj).length;  
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

  updateProdCateg(){
   
    this._productsService.updateProdCateg(this.i,this.data)
   .subscribe(()=>this.goBack());      
   }

}
