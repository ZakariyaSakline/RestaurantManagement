import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from '../menu/component/menu-list/menu-list.component'

const routes: Routes = [
  {
    path: '',
    component: MenuListComponent,
    // children: [
    //   {
    //     path: '',
    //     children: [
    //       { path: 'call', component: HttpCallComponent },
        
    //     ]
    //   }
    // ]   
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
