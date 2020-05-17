import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddWishesPageRoutingModule } from './add-wishes-routing.module';

import { AddWishesPage } from './add-wishes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddWishesPageRoutingModule
  ],
  declarations: [AddWishesPage]
})
export class AddWishesPageModule {}
