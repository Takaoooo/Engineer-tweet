import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { text } from '@angular/core/src/render3/instructions';

declare var marked: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string = "editor text";

  constructor(public navCtrl: NavController) {
    console.log("home.ts");
    $(function () {
      // alert("hoge");
      // $("#display").css("color","#d9534f");
      console.log($("#editor"));
      let text = $("#editor");
      console.log(text);

      // marked.setOptions({
      //   langPrefix: ''
      // });
    });
  }

  display(){
    console.log("check2");
    this.text = document.forms[0].editor["value"];


    var html = marked(this.text);

    $('#result').html(html);
  }

}
