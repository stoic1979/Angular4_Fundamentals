import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible = false;
  counter = 1;
  result = 2;

  fruits = ['apple', 'mango', 'banana'];

  username = "tom";


  constructor() {
  	  setTimeout( () => {
  		this.result++;
  	}, 1000);
  }

  toggleDiv() {
  	this.visible = ! this.visible;
  	this.counter++;
  }

}//AppComponent
