import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BridePagePage } from './bride-page.page';

const routes: Routes = [
  {
    path: '',
    component: BridePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BridePagePageRoutingModule {}
