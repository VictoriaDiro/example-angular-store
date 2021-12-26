import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'example-angular-store';

  items = ['Victoria', 'Jose', 'Redondo'];

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/image.png',
      title: 'Image',
      price: 20,
      description: 'Lorem ipsum'
    }
  ];

  addItem() {
    this.items.push('new item');
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
