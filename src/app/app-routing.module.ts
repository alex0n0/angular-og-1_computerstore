import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./app-store/routes/home/home.component";
import { ShopDashboardComponent } from "./app-store/routes/shop-dashboard/shop-dashboard.component";
import { OfficeDashboardComponent } from './app-office/routes/office-dashboard/office-dashboard.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "dashboard", component: ShopDashboardComponent },
  { path: "secret", component: OfficeDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
