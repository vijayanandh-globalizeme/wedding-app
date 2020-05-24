import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeddingEventPage } from './wedding-event.page';

const routes: Routes = [
  {
    path: '',
    component: WeddingEventPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingEventPageRoutingModule {}
