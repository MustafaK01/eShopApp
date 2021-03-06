import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductRepository } from 'src/app/model/product.repository';
import { AlertifyService } from 'src/app/utils/alertify.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  message:string;
  private productRepository:ProductRepository
  constructor(productRepository:ProductRepository) {
    this.productRepository=productRepository
   }


  ngOnInit(): void {
  }
  getProducts():Product[]{
    return this.productRepository.getProducts();
  }
  deleteProduct(product:Product){
      this.productRepository.deleteProduct(product)
  }
}

