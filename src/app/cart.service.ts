import { Injectable } from '@angular/core';
import { BaseProduct } from './products';

export interface ICartService {
    addToCart(product: BaseProduct): void;
    getItems(): BaseProduct[];
    clearCart(): void;
    getTotalSum(): number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService implements ICartService {
    private items: BaseProduct[] = [];

    addToCart(product: BaseProduct) {
        this.items.push(product);
    }

    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    getTotalSum(): number {
        return this.items.reduce((sum, item) => sum + item.calculatePrice(), 0);
    }
}