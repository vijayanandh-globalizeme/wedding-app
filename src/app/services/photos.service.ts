import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  collectionName = 'photos';
  moment: any = moment;

  // Observable string sources
  private subjectElem = new Subject<any>();

  // Observable string streams
  updateWishes$ = this.subjectElem.asObservable();

  constructor(
    private firestore: AngularFirestore
  ) { }

  // Get List
  getPhotos(): Observable<any> {
    return this.firestore.collection(this.collectionName, 
      ref => ref.where('status', '==', true)
    ).snapshotChanges();
  }

  //To refresh wishes list
  refereshGallery(){
    this.subjectElem.next();
  }
}
