import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexPage } from './index.page';

const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../home-page/home-page.module').then( m => m.HomePagePageModule)
      },
      {
        path: 'wishes-list',
        loadChildren: () => import('../wishes-list/wishes-list.module').then( m => m.WishesListPageModule)
      },
      {
        path: 'add-wishes',
        loadChildren: () => import('../add-wishes/add-wishes.module').then( m => m.AddWishesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
