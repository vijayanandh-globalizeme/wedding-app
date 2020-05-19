import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WishesModalPageRoutingModule } from './wishes-modal-routing.module';

import { WishesModalPage } from './wishes-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WishesModalPageRoutingModule
  ],
  declarations: [WishesModalPage]
})
export class WishesModalPageModule {}
