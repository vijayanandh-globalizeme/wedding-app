import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BridePagePageRoutingModule } from './bride-page-routing.module';

import { BridePagePage } from './bride-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BridePagePageRoutingModule
  ],
  declarations: [BridePagePage]
})
export class BridePagePageModule {}
