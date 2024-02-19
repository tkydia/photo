import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  IonButton,
  IonButtons,
} from '@ionic/angular/standalone';

import { PhotoService } from '../services/photo.service';
import {
  CaptureImageOptions,
  MediaCapture,
} from '@awesome-cordova-plugins/media-capture/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonButtons,
    IonButton,
    IonIcon,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  video: any;

  constructor(
    public photoService: PhotoService,
    public mediaCapture: MediaCapture
  ) {}
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async startRecording() {
    try {
      let options: CaptureImageOptions = { limit: 1 };
      const data = await this.mediaCapture.captureVideo(options);
      this.video = data;
      console.log(this.video);
    } catch (e) {
      console.log(e);
    }
  }
}
