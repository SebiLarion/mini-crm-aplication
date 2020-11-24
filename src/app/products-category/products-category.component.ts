import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { HttpClient} from '@angular/common/http';
import { IProdCateg } from '../prodCateg';
import { ActivatedRoute } from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-category',
  templateUrl: './products-category.component.html',
  styleUrls: ['./products-category.component.css']
})
export class ProductsCategoryComponent implements OnInit {

  public prodCateg:IProdCateg[]=[];
  public errMsg;
  public prc:Object={};

  constructor(
    private route: ActivatedRoute,
    private _productsService: ProductsService, 
    private http:HttpClient,
    private modalService: NgbModal
  ) { }

  fetchData(){
   
    this._productsService.getProdCateg()
    .subscribe(data => this.prodCateg = data,
               error => this.errMsg = error);

  }

  ngOnInit() {
    this.fetchData();
  }

  addProdCateg = function(prodC){
    
    this._productsService.addProdC(prodC)
    .subscribe(prodC=>this.prodCateg.push(prodC));
    
  }

  delete (id){
    if (confirm("Esti sigur ca vrei sa stergi aceasta categorie de produs?")){
    this._productsService.deleteProdC(id).subscribe(
      () => this.fetchData()
      );
     }
   }
   open(content) {
    this.modalService.open(content, {size:'lg'});
}

}

