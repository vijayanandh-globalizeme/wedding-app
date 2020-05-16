import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WishesListPage } from './wishes-list.page';

const routes: Routes = [
  {
    path: '',
    component: WishesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WishesListPageRoutingModule {}
