import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular'; 

@Component({
  selector: 'app-wishes-modal',
  templateUrl: './wishes-modal.page.html',
  styleUrls: ['./wishes-modal.page.scss'],
})
export class WishesModalPage implements OnInit {

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
