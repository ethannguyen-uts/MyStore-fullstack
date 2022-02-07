import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CartService, CART_STATUS } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  user: User = new User();
  total: number = 0;
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    if (this.cartService.status !== CART_STATUS.complete) {
      this.router.navigateByUrl('/');
    }
    this.user = this.cartService.user;
    this.total = this.cartService.getTotal();
    //Can start send cart to backend server
    //Clear the cart
    this.cartService.refreshCart();
  }
}
