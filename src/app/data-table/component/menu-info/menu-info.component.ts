import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddProductComponent} from '../add-product/add-product.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { MatPaginator} from '@angular/material';
import { ShareDataService} from '../../../services/share-data.service';
import { EventEmitterService } from '../../../services/event-emitter.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu-info',
  templateUrl: './menu-info.component.html',
  styleUrls: ['./menu-info.component.css']
})
export class MenuInfoComponent implements OnInit {
  jasonData;
  displayedColumns;
  dataSource;

  constructor(
    public _dialog: MatDialog,
    private _shareDataService:ShareDataService,
    private _eventEmitterService:EventEmitterService,
    private _router:Router



  ) { }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
  ngOnInit() {
    this.jasonData= this._shareDataService.getLocalProduct();
    this.displayedColumns= ['productId','productImage', 'productName','productPrice', 'productEdit','productDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this._eventEmitterService.getTableUpdateRowEvent().subscribe(newProductInfo=>{
      this.reloadTableForAddRow(newProductInfo);
    });
  }

  openAddProductDialog(): void {
    const dialogRef = this._dialog.open(AddProductComponent, {
      width: '650px',height:'700px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The AddEmployee dialog was closed');
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  reloadTableForAddRow(newEmployeeInfo){
    this.jasonData= newEmployeeInfo;
    this.displayedColumns= ['productId','productImage', 'productName','productPrice', 'productEdit','productDelete'];
    this.dataSource = new MatTableDataSource(this.jasonData);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  detailProduct(rowDetail){
    this._router.navigate([`/DataTable/${rowDetail.productId}`],
    );
  }



}
