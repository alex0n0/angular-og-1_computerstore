import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from "./app-store/routes/home/home.component";
import { TopnavComponent } from "./app-store/components/topnav/topnav.component";
import { ProductComponent } from "./app-store/components/product/product.component";
import { ProductOptionComponent } from "./app-store/components/product-option/product-option.component";
import { FooterComponent } from "./app-store/components/footer/footer.component";
import { ShopDashboardComponent } from "./app-store/routes/shop-dashboard/shop-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopnavComponent,
    ProductComponent,
    ProductOptionComponent,
    FooterComponent,

    ShopDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
