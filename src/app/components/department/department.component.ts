import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  arrayProducts: any = [];
  nameDep: string = '';

  constructor( private _aRouter:ActivatedRoute, private _productsService: ProductsService, private _router: Router ) {
    this._aRouter.params.subscribe( params => {
      this.arrayProducts = this._productsService.getDepartmentArray(params['dep']);
      this.nameDep = params['dep'];
    });
  }

  ngOnInit(): void {
  }

  navegar(index) {
    this._router.navigate( ['/product', index] );
  }

}
