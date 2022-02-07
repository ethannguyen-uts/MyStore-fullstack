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
  productList: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts = () => {
    this.productService.getProducts().subscribe((res: Product[]) => {
      //res.map((product: Product) => (product.quantity = 1));
      this.productList = res;
      this.productService.setProductList(res);
    });
  };
  addToCart = (data: { quantity: number; product: Product }) => {
    this.cartService.addToCart(data.quantity, data.product);
    alert(`${data.quantity} ${data.product.name} has been added to cart!`);
  };
}
