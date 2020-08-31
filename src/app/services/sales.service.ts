import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IProduct } from "../app-store/classes/products";

import { v4 as uuid } from "uuid";


@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const ddd = uuid();
    console.log(typeof ddd);
    var products:IProduct[] = [];

    for (let i = 0; i < 6; i++) {
      products.push({
        ID: uuid(),
        SKU: uuid(),
        ProductName: "AM4 Gaming fafe",
        ProductBrand: "MSI",
        AdditionalCost: i * 3,
        IsIncluded: i == 0 ? true:false,
        IsSelected: i == 0 ? true:false
      });
    }

    var response = {
      Success: true,
      BaseCost: 1600,
      ProductGroups: [
        {
          GroupName: "CPU",
          ID: uuid(),
          Products: this.generateSet()
        },
        {
          GroupName: "Motherboard",
          ID: uuid(),
          Products: this.generateSet()
        },
        {
          GroupName: "Graphics Card",
          ID: uuid(),
          Products: this.generateSet()
        },        
      ],
    }

    return new Observable<{Success: boolean, BaseCost: number, ProductGroups: { GroupName: string, ID: string, Products: IProduct[] }[] }>(observer => {
      setTimeout(() => observer.next(response), 500);
    });
    // return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }
  generateSet() {
    var products:IProduct[] = [];

    for (let i = 0; i < 6; i++) {
      products.push({
        ID: uuid(),
        SKU: uuid(),
        ProductName: "AM4 Gaming fafe",
        ProductBrand: "MSI",
        AdditionalCost: i * 3,
        IsIncluded: i == 0 ? true:false,
        IsSelected: i == 0 ? true:false
      });
    }

    return products;
  }
}


