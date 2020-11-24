import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { IProd } from '../prod';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public prod:IProd[]=[];
  public errMsg;
  closeResult: string;

  constructor(
    private _productsService: ProductsService,
    private modalService: NgbModal
    ) { }

  fetchData(){
    this._productsService.getProd()
     .subscribe(data => this.prod = data,
               error => this.errMsg = error);

    }

  ngOnInit() {
    this.fetchData();
  }

  addProd = function(prod){
    
    this._productsService.addProd(prod)
    .subscribe(prod=>this.prod.push(prod));
    
  }


  delete (id){
    if (confirm("Esti sigur ca vrei sa stergi acest produs?")){
     this._productsService.deleteProd(id).subscribe(
      () => this.fetchData()
          );
     }
      
   }

   open(content) {
    this.modalService.open(content, {size:'lg'});
   }   

}
