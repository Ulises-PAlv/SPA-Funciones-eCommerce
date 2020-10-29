import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})

export class SearcherComponent implements OnInit {

  constructor( private _aRoute: ActivatedRoute, private _productsService: ProductsService,  private _router: Router) { }

  resultadosBusqueda: any = [];
  strBusqueda: string = '';

  ngOnInit(): void {
    this._aRoute.params.subscribe( params => {
      this.strBusqueda = params['strHTML'];
      this.resultadosBusqueda = this._productsService.searchProducts(params['strHTML']);
    });
  }

  public arrayVacio() {
    if(this.resultadosBusqueda.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  navegar(index) {
    this._router.navigate( ['/product', index] );
  }

}
