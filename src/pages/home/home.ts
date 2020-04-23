import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
declare var window;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public smsTextmessage: string = '';
  public appHashString: string = '';

  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  getHashCode() {
    if (this.platform.ready()) {
      const smsRetriever: any = window.cordova.plugins.smsRetriever;
      smsRetriever['getAppHash']((res) => {
        this.appHashString = res;
        console.log(res);
      }, (err) => {
        console.warn(err);
      });
    }

  }

  getSMS() {
    if (this.platform.ready()) {
      const smsRetriever: any = window.cordova.plugins.smsRetriever;
      smsRetriever['startWatching']((res) => {
        this.smsTextmessage = res.Message;
        console.log(res);
      }, (err) => {
        console.warn(err);
      });
    }
  }
}
