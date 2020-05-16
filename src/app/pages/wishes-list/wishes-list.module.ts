import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishesListPageRoutingModule } from './wishes-list-routing.module';

import { WishesListPage } from './wishes-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishesListPageRoutingModule
  ],
  declarations: [WishesListPage]
})
export class WishesListPageModule {}
