import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading;
  photos: Array<string> = [];

  constructor(
    public loadingController: LoadingController
  ) {

  }

  ngOnInit() {
    this.printOnConsole();
    this.presentLoading();
    this.dismissLoading();

    this.randomPhotos();

    setTimeout( () => {
      try {
        this.dismissLoading();
      } catch(err) {
        console.error(err);
        alert('Error dismissing loader');
      }
      
    }, 5000)
    
  }

  async randomPhotos() {
    let i = 0;
    while (i < 501) {
      let salt = await Math.floor((Math.random() * 300) + 1);
      this.photos.push(`https://picsum.photos/200/200?image=${salt}`)
      i = i + 1;
    }
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      spinner: 'dots',
      message: 'Please wait...'
    });
    return await this.loading.present();
  }

  printOnConsole() {
    console.log('Running a public function on init');
  }

  aysnc dismissLoading() {
    if (!_.isNil(this.loading)) {
      this.loading.dismiss();
    }
  }
}
