import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  isLoading: boolean = false;
  productList: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts = () => {
    this.isLoading = true;
    this.productService.getProducts().subscribe((res: Product[]) => {
      this.productList = res;
      this.productService.setProductList(res);
    });
    this.isLoading = false;
  };
  addToCart = (data: { quantity: number; product: Product }) => {
    this.cartService.addToCart(data.quantity, data.product);
  };
}
