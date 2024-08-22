import { Component, EventEmitter, Output } from '@angular/core';
import { product } from '../../Interfaces/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  productName:string;
  productDescription:string;
  ProductPrice:number;
  ProductImage:string;
  
  @Output() eventAddProduct:EventEmitter<product>=new EventEmitter<product>();
 onAddProduct()
 {
   let currentProduct:product={} as product ;
   currentProduct.description=this.productDescription
   currentProduct.image=this.ProductImage;
   currentProduct.name=this.productName;
   currentProduct.price=this.ProductPrice;
    this.eventAddProduct.emit(currentProduct);
 }

}
