import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { CART_STATUS } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  user: User = new User();
  total: number = 0;

  onSubmit = () => {
    this.cartService.setUser(this.user);
    this.cartService.setStatus(CART_STATUS.complete);
    this.router.navigateByUrl('/confirmation');
  };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.total = this.cartService.getTotal();
  }
}
