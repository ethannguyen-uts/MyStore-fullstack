import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  badgeClass = 'badge';
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getQuantityObservable().subscribe((value: number) => {
      if (this.badgeClass == 'badge') this.badgeClass = 'badge bump';

      setTimeout(() => {
        this.badgeClass = 'badge';
      }, 301);
      this.total = value;
    });
  }
}
