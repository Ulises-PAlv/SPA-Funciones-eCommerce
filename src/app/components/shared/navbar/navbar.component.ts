import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private _Router: Router ) { }

  ngOnInit(): void {
  }

  public Search(searchValue) {
    this._Router.navigate( ['/results', searchValue] );
  }

  public navigateDep(dep) {
    this._Router.navigate( ['department', dep] );
  }

}
