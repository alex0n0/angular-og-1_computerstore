import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from "../../classes/products";

@Component({
  selector: 'app-product-option',
  templateUrl: './product-option.component.html',
  styleUrls: ['./product-option.component.scss']
})
export class ProductOptionComponent implements OnInit {

  @Input() productInfo:IProduct = undefined;
  @Output() productSelectionOutput = new EventEmitter<string>();

  isExpanded:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  handleClickToggleDetail() {
    this.isExpanded = !this.isExpanded;
  }

  handleClickProductOption() {
    if (this.productInfo.ID) {
      this.productSelectionOutput.emit(this.productInfo.ID);
    }
  }

}
