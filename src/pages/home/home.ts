import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result: string = '';
  disabled: boolean = true;
  interval: any;
  constructor(public navCtrl: NavController) {

  }
  decide() {
    this.interval = setInterval(() => {
      this.result = this.result === 'yes' ? 'no' : 'yes';
    }, 450);
    setTimeout(() => {
      clearInterval(this.interval);
      this.result = Math.round(Math.random()) === 0?'no':'yes';
      console.log(this.result);
    }, 4000);
  }
  onKey(value: string) {
    this.disabled = !(value.length > 3);
  }

}
