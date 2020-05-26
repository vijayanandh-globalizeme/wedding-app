import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingInfoPageRoutingModule } from './wedding-info-routing.module';

import { WeddingInfoPage } from './wedding-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingInfoPageRoutingModule
  ],
  declarations: [WeddingInfoPage]
})
export class WeddingInfoPageModule {}
