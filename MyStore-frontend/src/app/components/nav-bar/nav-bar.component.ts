import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getQuantityObservable().subscribe((value: number) => {
      // do something with this value
      this.total = value;
    });
  }
}
