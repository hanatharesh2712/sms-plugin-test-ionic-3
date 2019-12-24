import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';
var smsRetriever = window['cordova']['plugins']['smsRetriever'];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public smsTextmessage: string = '';
  public appHashString: string = '';

  constructor(public navCtrl: NavController, private smsRetriever: SmsRetriever) {

  }
  getHashCode() {
    smsRetriever['getAppHash']((res) => {
      this.appHashString = res;
      console.log(res);
    }, (err) => {
      console.warn(err);
    }
    );
  }

  getSMS() {
    smsRetriever['startWatching']((res) => {
      this.smsTextmessage = res.Message;
      console.log(res);
    }, (err) => {
      console.warn(err);
    }
    );
  }
}
