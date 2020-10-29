import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  product: any = {};  // ??

  constructor( private _router:ActivatedRoute, private _productsService: ProductsService ) {
    this._router.params.subscribe( params => {
      this.product = this._productsService.getProduct(params['id']);
    });
  }

  ngOnInit(): void {
  }
}
