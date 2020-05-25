import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosPageRoutingModule } from './photos-routing.module';

import { PhotosPage } from './photos.page';

// Import NgMasonryGridModule
import { MasonryGalleryModule } from 'ngx-masonry-gallery';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MasonryGalleryModule,
    PhotosPageRoutingModule
  ],
  declarations: [PhotosPage]
})
export class PhotosPageModule {}
