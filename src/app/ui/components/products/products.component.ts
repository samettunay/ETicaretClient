import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService, private httpClientService:HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.SquareJellyBox);

    this.httpClientService.get<Product[]>({
      controller:"products"
    }).subscribe(data=>console.log(data));

    // this.httpClientService.post({
    //   controller:"products"
    // }, {
    //   name:"Kalem",
    //   stock:100,
    //   price: 15
    // }).subscribe();

    // this.httpClientService.put({
    //   controller:"products"
    // }, {
    //   id:"35e7c406-246f-42d7-9131-946025e8bdd7",
    //   name:"Defter",
    //   stock:100,
    //   price: 7
    // }).subscribe();

    // this.httpClientService.delete({
    //   controller:"products"
    // }, "0ed0c2c0-9203-4e28-a2d8-47cd21d21e6c").subscribe();

    // this.httpClientService.get({
    //   baseUrl: "https://jsonplaceholder.typicode.com",
    //   controller: "posts"
    //  }).subscribe(data=>console.log(data));
  }

}
