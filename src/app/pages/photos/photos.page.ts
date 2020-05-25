import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../../services/photos.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  images: any = [];

  constructor(
    private photoService: PhotosService,
    public photoViewer: PhotoViewer
  ) { }

  ngOnInit() {
    this.showPhotos();
  }

  showPhotos(){
    this.photoService.getPhotos().subscribe(data => {
      this.images = data.map(e => {
        return {
          id: e.payload.doc.id,
          imgSrc:  e.payload.doc.data()['url'],
          status: e.payload.doc.data()['status'],
        };
      });
    })
  }

  fullscreen(url){
    this.photoViewer.show(url, '', {share: false});
  }

}
