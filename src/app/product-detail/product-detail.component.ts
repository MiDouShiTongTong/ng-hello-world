import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  public productId: number;

  constructor(
    public route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
  }
}
