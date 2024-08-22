import { Component } from '@angular/core';
import { product } from '../Interfaces/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'D3';
productElements:product[]=[
  {name:"Perfume" ,image:"https://m.media-amazon.com/images/I/514MHDeGwOL._AC_SL1000_.jpg",description:"Good perfume.",price:500},
  {name:"Bage" ,image:"https://cpimg.tistatic.com/05895132/b/4/Back-pack-Bage.jpg",description:"Good bage.",price:400},
  {name:"Camera" ,image:"https://i.ebayimg.com/images/g/~FkAAOSwSTFmwr7J/s-l1600.webp",description:"Good Camera.",price:2500},
  {name:"Watch" ,image:"https://north511.com/cdn/shop/files/2_d20fa7a8-4ad1-485c-a014-b83e2ebc3afa.png?v=1699801986&width=1080",description:"Good Camera.",price:250},
];
serverElements:any=[{type:'server',name:'test server', content:'this is test data server'}]
  onAddServer(serverData:{serverName:string,serverContent:string})
  {

     this.serverElements.push
     (
      {
         type:'server',
         name:serverData.serverContent,
         content:serverData.serverContent
      }
    )
  }
  onAddBluePrint()
  {
  //   this.serverElements.push
  //   (
  //     {
  //       type:'server',
  //       name:this.newServerName,
  //       content:this.newServerContent
  //     }
  //   )
   }
   onCreateProduct(newProduct:product)
   {
      this.productElements.push(newProduct);
      console.log(this.productElements);

   }
}
