import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  imagess: any = [];
  private urls: string[] = [
    'http://www.magicalkenya.com/wp-content/uploads/2014/08/homebannerimg4.jpg',
    'https://media.gadventures.com/media-server/cache/12/59/12591a5497a563245d0255824103842e.jpg',
    'https://i.pinimg.com/originals/1c/aa/c5/1caac55143e3e11461c6ae5962403deb.jpg',
  ];


  constructor(
    private photoService: PhotosService
  ) { }

  ngOnInit() {
    // this.showPhotos();
  }


  public get images(): IMasonryGalleryImage[] {
    this.photoService.getPhotos().subscribe(data => {
      this.imagess = data.map(e => {
        return {
          id: e.payload.doc.id,
          imgSrc:  e.payload.doc.data()['url'],
          status: e.payload.doc.data()['status'],
        };
      });
    })
    return this.imagess.map(m => <IMasonryGalleryImage>{
        imageUrl: m
    });
  }

  showPhotos(){
    this.photoService.getPhotos().subscribe(data => {
      this.imagess = data.map(e => {
        return {
          id: e.payload.doc.id,
          imgSrc:  e.payload.doc.data()['url'],
          status: e.payload.doc.data()['status'],
        };
      });
    })
  }

}
