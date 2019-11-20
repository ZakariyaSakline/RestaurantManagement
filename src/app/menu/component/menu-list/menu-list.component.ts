import { Component, OnInit } from '@angular/core';
import { ShareDataService } from '../../../services/share-data.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  productInfo;

  constructor(
    private _shareDataService:ShareDataService
  ) { }

  ngOnInit() {
   this.productInfo= this._shareDataService.getLocalProduct();
  }

}
