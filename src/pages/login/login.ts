import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Login } from '../../types';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  login: Login = { email: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, private afauth: AngularFireAuth) {
  }

  doLogin(): void {
    this.afauth.auth.signInWithEmailAndPassword(this.login.email, this.login.password)
      .then(() => {
        this.navCtrl.setRoot(HomePage, {}, { animate: true, animation: 'ios-transition', direction: 'forward' });
      })
      .catch(err => console.error(err));
  }

}
