import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  arrayProducts: any[] = [];

  constructor( private _productsService: ProductsService, private _router: Router) { }

  ngOnInit(): void {
    // Se ejecuta al terminar de renderizar el componente
    this.arrayProducts = this._productsService.getProducts();
  }

  navegar(index) {
    this._router.navigate( ['/product', index] );
  }

}
