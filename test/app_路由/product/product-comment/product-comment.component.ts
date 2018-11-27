import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-comment',
  templateUrl: './product-comment.component.html',
  styleUrls: ['./product-comment.component.scss']
})
export class ProductCommentComponent implements OnInit {
  private productId: number;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id;
  }
}
