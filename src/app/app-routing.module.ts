import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path:'Menu',
    loadChildren:'./menu/menu.module#MenuModule'
  },
  {
    path:'DataTable',
    loadChildren:'./data-table/data-table.module#DataTableModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
