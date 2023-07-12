import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'model/carac.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaracteristiqueService {

  constructor(private http:HttpClient) { }
  public getProduct(): Observable<Array<Product>>{
    const url = "http://localhost:8088/caracteristique";
    return this.http.get<Array<Product>>(url);
  }
  //suppression
  public deleteProduct(product: Product){
    const url = `http://localhost:8088/caracteristique/${product.id}`;
    return this.http.delete<any>(url);
  }
  //enregistrement venant de la page
  public saveProduct(product: Product): Observable<Product>{
    const url = `http://localhost:8088/caracteristique`;
    return this.http.post<Product>(url, product);
  }
  //recupération des donées mis à jour
  public updateProduct(product: Product){
    const url = `http://localhost:8088/caracteristique/${product.id}`;
    return this.http.put<any>(url,product);
  }
  
  public total(){
    const url = `http://localhost:8088/caracteristique`;
    return this.http.get(url);
  }
  public minimum(){
    const url = `http://localhost:8088/caracteristique`;
    return this.http.get(url);
  }
  public maximum(){
    const url = `http://localhost:8088/caracteristique`;
    return this.http.get(url);
  }
}
