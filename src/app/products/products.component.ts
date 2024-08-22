import { Component, Input } from '@angular/core';
import { product } from '../../Interfaces/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
@Input() currentProduct:product;
}
