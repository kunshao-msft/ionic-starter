import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  param = {name: 'Kun'};

  constructor(public navCtrl: NavController, translate: TranslateService) {
    translate.setDefaultLang('en');

    translate.use('zh_CN');
  }

}
