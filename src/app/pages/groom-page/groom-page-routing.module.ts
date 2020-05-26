import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroomPagePage } from './groom-page.page';

const routes: Routes = [
  {
    path: '',
    component: GroomPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroomPagePageRoutingModule {}
