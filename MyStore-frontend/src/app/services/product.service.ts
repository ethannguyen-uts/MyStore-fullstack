import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiURL = environment.apiURL;
  productList: Product[] = [];
  constructor(private http: HttpClient) {}
  getProducts = (): Observable<Product[]> => {
    return this.http.get<Product[]>(this.apiURL.concat('/products'));
  };
  setProductList = (productList: Product[]) => {
    this.productList = productList;
  };
  getProductByName = (productName: string): Product | undefined => {
    return this.productList.find((item) => item.name === productName);
  };
}
