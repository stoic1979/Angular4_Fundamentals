import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blueColored]'
})


export class BlueColoredDirective {

	element: ElementRef;

  constructor(element: ElementRef) {
  	console.log(element);
 	element.nativeElement.style.color = "blue";

 	this.element = element;
  }

  // bind click event to doSomething() function
  @HostListener('click') doSomething() {
  	alert('BlueColoredDirective clicked');
  }

  @HostListener('mouseenter') doSomething1() {
  	console.log('BlueColoredDirective mouse entered');
  	this.element.nativeElement.style.color = "red";
  }

  @HostListener('mouseleave') doSomething2() {
  	console.log('BlueColoredDirective mouse leave');
  	this.element.nativeElement.style.color = "blue";
  }

}//BlueColoredDirective
