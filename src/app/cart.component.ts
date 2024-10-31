import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from './cart.service';
import { BaseProduct } from './products';

@Component({
    standalone: true,
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    imports: [CommonModule, RouterModule]
})
export class CartComponent implements OnInit {
    items: BaseProduct[] = [];
    totalSum: number = 0;

    constructor(private cartService: CartService) {}

    ngOnInit() {
        this.updateCart();
    }

    updateCart() {
        this.items = this.cartService.getItems();
        this.totalSum = this.cartService.getTotalSum();
    }

    clearCart() {
        this.cartService.clearCart();
        this.updateCart();
    }
}