import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GroomPagePageRoutingModule } from './groom-page-routing.module';

import { GroomPagePage } from './groom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroomPagePageRoutingModule
  ],
  declarations: [GroomPagePage]
})
export class GroomPagePageModule {}
