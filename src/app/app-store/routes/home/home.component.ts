import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../../services/sales.service";
import { IProduct } from "../../classes/products";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadingInitial = true;

  baseCost = 0;
  totalCost = 0;
  productGroups:{ GroupName: string, ID: string, Products: IProduct[], prevItemId: string, additionalCost: number }[] = [];
  productGroupSelections = [];

  constructor(private salesService: SalesService) { }
  
  ngOnInit() {
    this.salesService.getProducts().subscribe((response:{Success: boolean, BaseCost: number, ProductGroups: { GroupName: string, ID: string, Products: IProduct[] }[] }) => {
      this.loadingInitial = false;
      if (response.Success) {
        var productGroups = [];
        for (let i = 0; i < response.ProductGroups.length; i++) {
          var productGroup = {prevItemId:undefined, additionalCost:0, ...response.ProductGroups[i]};
          if (productGroup.Products[0]) productGroup.prevItemId = productGroup.Products[0].ID;
          productGroups.push(productGroup);
        }
        this.baseCost = response.BaseCost;
        this.totalCost = this.baseCost;
        this.productGroups = productGroups;
      }
    });
  }

  productSelectionOutput(groupId, nextItemId) {
    var productGroup = this.productGroups.find(currGroup => currGroup.ID == groupId);    

    if (productGroup) {
      var prevItem = productGroup.Products.find(currProduct => currProduct.ID == productGroup.prevItemId);
      if (prevItem) prevItem.IsSelected = false;

      var nextItem = productGroup.Products.find(currProduct => currProduct.ID == nextItemId);
      if (nextItem) nextItem.IsSelected = true;
      productGroup.prevItemId = nextItemId;
      productGroup.additionalCost = nextItem.AdditionalCost;
    }

    var additionalCost = 0;
    for(let i = 0; i < this.productGroups.length; i++) {
      additionalCost += this.productGroups[i].additionalCost;
    }
    this.totalCost = this.baseCost + additionalCost;
  }

}
