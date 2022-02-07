import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product();
  selectedQuantity: number = 1;
  options: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const pathArr = this.router.url.split('/');
    const productName = pathArr[pathArr.length - 1];

    if (!this.productService.productList.length) {
      this.productService.getProducts().subscribe((res: Product[]) => {
        res.map((product: Product) => (product.quantity = 1));
        this.productService.setProductList(res);
        this.findProduct(productName);
      });
    } else {
      this.findProduct(productName);
    }
  }
  findProduct = (productName: string) => {
    const product = this.productService.getProductByName(productName);
    product ? (this.product = product) : null;
  };
  addToCart = (quantity: number, product: Product) => {
    this.cartService.addToCart(quantity, product);
    alert(`${quantity} ${product.name} has been added to cart!`);
  };
}
