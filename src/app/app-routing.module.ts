import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { ProductsCategoryComponent } from './products-category/products-category.component';
import { ProductsComponent } from './products/products.component';
import { EditProductsComponent } from './edit-products/edit-products.component';
import { FacturiComponent } from './facturi/facturi.component';

const routes: Routes = [
  {path: 'products-category', component: ProductsCategoryComponent},
  {path: 'editC/:id', component: EditCategoryComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'editP/:id', component: EditProductsComponent},
  {path: 'facturi', component: FacturiComponent}
  ];
 

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [ 
  ProductsCategoryComponent,
  ProductsComponent,
  EditCategoryComponent,
  EditProductsComponent
]
