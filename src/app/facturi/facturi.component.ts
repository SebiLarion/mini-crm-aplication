import { Component, OnInit } from '@angular/core';
import { Antet } from '../antet';
import { ProductsService } from '../products.service';
import { IProd } from '../prod';


@Component({
  selector: 'app-facturi',
  templateUrl: './facturi.component.html',
  styleUrls: ['./facturi.component.css']
})
export class FacturiComponent implements OnInit {
public fact: Antet[]=[];
public errMsg;
selectedF:Antet;
public prod:IProd[]=[];
  constructor(private _productsService: ProductsService,) { }

  fetchData(){
    this._productsService.getFact()
     .subscribe(data => this.fact = data,
               error => this.errMsg = error);

    }
  

  ngOnInit() {
    this.fetchData();
    this.getP();
  }
  onSelect(fac:Antet):void{
    this.selectedF=fac;
  }

  getP(){
    this._productsService.getProd()
    .subscribe(data => this.prod = data,
              error => this.errMsg = error);

   }
  

}
