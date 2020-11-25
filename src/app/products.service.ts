import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { IProd } from './prod';
import {  IProdCateg } from './prodCateg';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Antet } from './antet';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url1: string="http://localhost:3000/prod"; 
  private url2: string="http://localhost:3000/prodCateg";
  private url3: string="http://localhost:3000/facturi";

  constructor(private http: HttpClient) { }

  getProd(): Observable<IProd[]>{
    return this.http.get<IProd[]>(this.url1)
                    .pipe(catchError(this.errorHandler));
 
   }

  getProdCateg(): Observable<IProdCateg[]>{
    return this.http.get<IProdCateg[]>(this.url2)
                    .pipe(catchError(this.errorHandler));
 
   }

   getFact(): Observable<Antet[]>{
    return this.http.get<Antet[]>(this.url3)
                    .pipe(catchError(this.errorHandler));
 
   }

  addProdC (prodC: IProdCateg): Observable<IProdCateg> {
    return this.http.post<IProdCateg>(this.url2, prodC, httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }


  addProd (prod: IProd): Observable<IProd> {
    return this.http.post<IProd>(this.url1, prod, httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteProdC(id) :Observable<any>{     
    const ur=`${this.url2}/${id}`;
       return this.http.delete(ur,httpOptions)
              .pipe(
                catchError(this.errorHandler)
              );
  }

  deleteProd(id) :Observable<any>{     
    const ur=`${this.url1}/${id}`;
       return this.http.delete(ur,httpOptions)
              .pipe(
                catchError(this.errorHandler)
              );
  }

  updateProdCateg(id, prodC): Observable<any>{
    const ur=`${this.url2}/${id}`;
    return this.http.put(ur, prodC, httpOptions)
          .pipe(
            catchError(this.errorHandler)
          );
  }

  updateProd(id, prod): Observable<any>{
    const ur=`${this.url1}/${id}`;
    return this.http.put(ur, prod, httpOptions)
          .pipe(
            catchError(this.errorHandler)
          );
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
    
   }

   
}
