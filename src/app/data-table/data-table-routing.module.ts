import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuInfoComponent} from '../data-table/component/menu-info/menu-info.component';
import{ProductDetailComponent} from './component/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MenuInfoComponent,
    // children: [
    //   {
    //     path: '',
    //     children: [
    //       { path: 'call', component: HttpCallComponent },
        
    //     ]
    //   }
    // ]   
  },
  {
    path: ':productId',
    component: ProductDetailComponent,  
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTableRoutingModule { }
