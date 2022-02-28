import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CartService, CART_STATUS } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  listProduct: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.updateCart();
  }

  updateCart = (): void => {
    this.listProduct = this.cartService.getCart();
    this.total = this.cartService.getTotal();
  };
  cartItemUpdate = (product: Product): void => {
    this.listProduct = this.cartService.cartItemUpdate(product);
    this.total = this.cartService.getTotal();
  };
  removeProduct = (product: Product): void => {
    this.listProduct = this.cartService.removeFromCart(product);
    this.total = this.cartService.getTotal();
  };
  removeAll = (): void => {
    this.listProduct = this.cartService.refreshCart();
    this.updateCart();
  };
  onCheckout = () => {
    this.router.navigateByUrl('/checkout');
  };
}
