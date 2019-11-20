import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShareDataService} from '../../../services/share-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _shareDataService:ShareDataService
  ) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(params => {
      this.product = params.get('productId');
    });

  }




}
