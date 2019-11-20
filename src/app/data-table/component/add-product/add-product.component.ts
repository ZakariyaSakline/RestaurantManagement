import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup, FormControl, NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ShareDataService } from '../../../services/share-data.service';
import { EventEmitterService } from '../../../services/event-emitter.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  signupForm: FormGroup;
  localJsonData;

  constructor(
    public _dialogRef: MatDialogRef<AddProductComponent>,
    private _formbilder: FormBuilder,
    private _shareDataService: ShareDataService,
    private _snackBar: MatSnackBar,
    private _eventEmitterService:EventEmitterService
  ) { }

  ngOnInit() {
    this.ProductInputData();
  }

  ProductInputData(): void {
    this.signupForm = this._formbilder.group({
      productId: ['', Validators.required],
      productName: ['', Validators.required],
      productPrice: ['', Validators.required],
      productImage: ['', Validators.required]
    });
  }

  
  productSubmit(signupForm: any): any {
    this.getProductInputData(signupForm);
    // this.resetFrom();
  }

  getProductInputData(signupForm: any): any {
    this.localJsonData=this._shareDataService.getLocalProduct();
    let data = {
      'productId': signupForm.controls.productId.value,
      'productName': signupForm.controls.productName.value,
      'productPrice': signupForm.controls.productPrice.value,
      'productImage': signupForm.controls.productImage.value
      }
    this.localJsonData.push(data);
    this._eventEmitterService.emitTableSubmitEvent(this.localJsonData);
    localStorage.setItem('restaurent', JSON.stringify(this.localJsonData));
}

  // for snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    });
  }

  onNoClick(): void {
    this._dialogRef.close();
  }



}
