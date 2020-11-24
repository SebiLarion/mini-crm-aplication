import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsComponent } from './products/products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FacturiComponent } from './facturi/facturi.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsCategoryComponent,
    ProductsComponent,
    EditProductsComponent,
    EditCategoryComponent,
    routingComponents,
    FacturiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
