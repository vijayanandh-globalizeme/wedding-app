import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingInfoPage } from './wedding-info.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingInfoPageRoutingModule {}
