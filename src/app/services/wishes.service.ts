import { Injectable } from '@angular/core';
import { Wishes } from '../shared/Wishes';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject, Observable } from 'rxjs';
import * as moment from 'moment-timezone';

@Injectable({
  providedIn: 'root'
})
export class WishesService {

  collectionName = 'wishes';
  moment: any = moment;

  // Observable string sources
  private subjectElem = new Subject<any>();

  // Observable string streams
  updateWishes$ = this.subjectElem.asObservable();

  constructor(
    private firestore: AngularFirestore
  ) { }

  // Create
  addWishes(record: Wishes) {
    record.status = false;
    record.createdAt = moment().tz('Asia/Kolkata').format();
    return this.firestore.collection(this.collectionName).add(record);
  }

  // Get Single
  getWishes(id: string) {
    // this.wishRef = this.db.object('/wishes/' + id);
    // return this.wishRef;
  }

  // Get List
  getWishesList(): Observable<any> {
    return this.firestore.collection('wishes', 
      ref => ref.where('status', '==', true).orderBy('createdAt','desc')
    ).snapshotChanges();
  }

  //To refresh wishes list
  updateWishesList(){
    this.subjectElem.next();
  }

}
