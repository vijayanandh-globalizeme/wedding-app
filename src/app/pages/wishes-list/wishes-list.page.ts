import { Component, OnInit } from '@angular/core';
import { WishesService } from '../../services/wishes.service';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-wishes-list',
  templateUrl: './wishes-list.page.html',
  styleUrls: ['./wishes-list.page.scss'],
})
export class WishesListPage implements OnInit {

  wArray:any = [];
  moment: any = moment;

  constructor(
    private wishService: WishesService
  ) { }

  ngOnInit() {
    this.getWishes();
  }

  getWishes(){
    this.wishService.getWishesList().subscribe(data => {
      this.wArray = data.map(e => {
        return {
          id: e.payload.doc.id,
          name:  e.payload.doc.data()['name'],
          content: e.payload.doc.data()['content'],
          status: e.payload.doc.data()['status'],
          createdAt: e.payload.doc.data()['createdAt'],
        };
      });
    });
  }

  toggleWish(item){
    item.active = !item.active;
  }
}
