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
      },
      {
        path: 'bride-page',
        loadChildren: () => import('../bride-page/bride-page.module').then( m => m.BridePagePageModule)
      },
      {
        path: 'groom-page',
        loadChildren: () => import('../groom-page/groom-page.module').then( m => m.GroomPagePageModule)
      },
      {
        path: 'photos',
        loadChildren: () => import('../photos/photos.module').then( m => m.PhotosPageModule)
      },
      {
        path: 'wedding-event',
        loadChildren: () => import('../wedding-event/wedding-event.module').then( m => m.WeddingEventPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPageRoutingModule {}
