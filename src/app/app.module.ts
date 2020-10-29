import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// ?? Rutas
import { RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { DepartmentComponent } from './components/department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    SearcherComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'product', component: ProductComponent},
      {path: 'about', component: AboutComponent},
      {path: 'product/:id', component: ProductComponent},
      {path: 'results/:strHTML', component: SearcherComponent},
      {path: 'department/:dep', component: DepartmentComponent},
      {path: '**', pathMatch: 'full', component: Error404Component}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
