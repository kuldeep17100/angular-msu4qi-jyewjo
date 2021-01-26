import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../products";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  public product;
  public x;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const routeParams = parseInt(this.route.snapshot.paramMap.get("productID"));
    //const productIDFromRoute = parseInt(routeParams.get("productID"));

    this.product = products.find(x => x.id == routeParams);
    //console.log(this.product.name);
  }
}
