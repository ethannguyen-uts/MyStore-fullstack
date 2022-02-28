import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { User } from '../models/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  user: User = new User();
  status: string = '';
  listProduct: Product[] = [];
  total: number = 0;
  totalQuantity: number = 0;
  quantityObservable: BehaviorSubject<number> = new BehaviorSubject(this.total);
  constructor() {}

  //Get method
  getCart = (): Product[] => {
    return this.listProduct;
  };

  //Modifying cart items
  addToCart = (quantity: number, product: Product): Product[] => {
    product.quantity = quantity;
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex == -1) {
      this.listProduct.push(product);
    } else {
      this.listProduct[productIndex].quantity += quantity;
    }
    this.total += product.price * quantity;
    this.totalQuantity = this.totalQuantity + quantity;
    this.quantityObservable.next(this.totalQuantity);
    return this.listProduct;
  };

  cartItemUpdate = (product: Product): Product[] => {
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex !== -1) {
      if (product.quantity === 0) {
        this.listProduct.splice(productIndex, 1);
      } else {
        this.listProduct[productIndex].quantity = product.quantity;
      }
      this.getTotal();
      this.calculateTotalQuantity();
      this.quantityObservable.next(this.totalQuantity);
    }
    return this.listProduct;
  };

  removeFromCart = (product: Product): Product[] => {
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex !== -1) {
      this.listProduct.splice(productIndex, 1);
      this.total = this.total - product.quantity * product.price;
      this.totalQuantity = this.totalQuantity - product.quantity;
      this.quantityObservable.next(this.totalQuantity);
    }
    return this.listProduct;
  };

  reduceQuantity = (product: Product): Product[] => {
    const productIndex = this.listProduct.findIndex(
      (item) => item.name === product.name
    );
    if (productIndex !== -1) {
      const productQuantity = this.listProduct[productIndex].quantity;
      productQuantity > 1
        ? this.listProduct[productIndex].quantity--
        : this.listProduct.splice(productIndex, 1);
      this.total -= this.listProduct[productIndex].price;
      this.totalQuantity--;
      this.quantityObservable.next(this.totalQuantity);
    } else throw new Error('Product does not exists in the cart');
    return this.listProduct;
  };

  refreshCart = (): Product[] => {
    this.listProduct = [];
    this.total = 0;
    this.totalQuantity = 0;
    this.status = CART_STATUS.active;
    this.quantityObservable.next(this.totalQuantity);
    return [];
  };

  //Calculation
  getTotal = (): number => {
    const result = this.listProduct.reduce(
      (a: number, b: Product) => a + b.price * b.quantity,
      0
    );
    this.total = Math.round(result * 100) / 100;
    return this.total;
  };
  calculateTotalQuantity = (): number => {
    const result = this.listProduct.reduce(
      (a: number, b: Product) => a + b.quantity,
      0
    );
    this.totalQuantity = Math.round(result * 100) / 100;
    return this.total;
  };

  //Set method
  setUser = (user: User): void => {
    this.user = user;
  };
  setStatus = (status: string): void => {
    this.status = status;
  };

  //observe total quantity
  getQuantityObservable = (): Observable<number> => {
    return this.quantityObservable.asObservable();
  };
}

export const CART_STATUS = {
  active: 'ACTIVE',
  complete: 'COMPLETE',
};
