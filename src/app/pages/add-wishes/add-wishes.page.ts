import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WishesService } from '../../services/wishes.service';
import { AlertController } from '@ionic/angular';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-add-wishes',
  templateUrl: './add-wishes.page.html',
  styleUrls: ['./add-wishes.page.scss'],
})
export class AddWishesPage implements OnInit {

  ionicForm: FormGroup;
  isSubmitted = false;
  isSubmitDisable = false;
  captureDataUrl: string;

  constructor(
    private wishService: WishesService,
    private router: Router,
    public alertController: AlertController, 
    public fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.ionicForm = this.fb.group({
      name: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      content: ['', [Validators.required]]
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  formSubmit() {
    this.isSubmitted = this.isSubmitDisable = true;
    if (!this.ionicForm.valid) {
      this.isSubmitDisable = false;
      console.log(this.ionicForm.controls);
      return false;
    } else {
      this.wishService.addWishes(this.ionicForm.value).then(res => {
        console.log(res)
        this.showAlert();
      }).catch(error => {
        this.isSubmitted = this.isSubmitDisable = false;
        console.log(error);
      });
    }
  }

  async showAlert(){
    const alert = await this.alertController.create({
      header: 'Wedding App',
      backdropDismiss: false,
      message: 'Your wishes have posted and waiting for approval.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.ionicForm.reset();
          this.isSubmitted = this.isSubmitDisable = false;
          this.router.navigate(['/index/wishes-list']);
        }
      }],
    });
    await alert.present();
  }

  // getPicture(sourceType){
  //   const cameraOptions: CameraOptions = {
  //     quality: 50,
  //     destinationType: this.camera.DestinationType.DATA_URL,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     sourceType: sourceType
  //   };

  //   this.camera.getPicture(cameraOptions)
  //    .then((captureDataUrl) => {
  //      this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
  //   }, (err) => {
  //       console.log(err);
  //   });
  // }

}
