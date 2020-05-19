import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  mDate = new Date('May 28, 2020 15:18:00').getTime();
  counter:any = [];
  moment: any = moment;

  constructor() { }

  ngOnInit() {
    this.countDown();
  }

  countDown(){
    setInterval(() => {
      let cDate = new Date(moment().tz('Asia/Kolkata').format()).getTime();
      let diffInDate = this.mDate - cDate;
      if (diffInDate > 0) {
        this.counter['days'] = Math.floor(diffInDate / (1000 * 60 * 60 * 24));
        this.counter['hours'] = Math.floor((diffInDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.counter['minutes'] = Math.floor((diffInDate % (1000 * 60 * 60)) / (1000 * 60));
        this.counter['seconds'] = Math.floor((diffInDate % (1000 * 60)) / 1000);
      }
    }, 1000);
  }


}
