import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../types';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: Login = { email: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  doLogin(): void {
    localStorage.setItem('blog_user', JSON.stringify(true));
    this.navCtrl.setRoot(HomePage, {}, {animate: true, animation: 'ios-transition', direction: 'forward'});
  }

}
