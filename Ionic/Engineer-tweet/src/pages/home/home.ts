import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    console.log("home.ts");
    // $(document).ready(function(){
    //   $.ajax({
    //     crossDomain: true,
    //   });
    //   alert("jQueryファイルの読み込み完了でーす。");
    // });
    $(function () {
      alert("hoge");
    });
  }

}
