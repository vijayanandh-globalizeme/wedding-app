import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeddingEventPageRoutingModule } from './wedding-event-routing.module';

import { WeddingEventPage } from './wedding-event.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeddingEventPageRoutingModule
  ],
  declarations: [WeddingEventPage]
})
export class WeddingEventPageModule {}
