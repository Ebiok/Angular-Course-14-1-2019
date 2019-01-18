import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {
title: string = 'This is my title ...Hello ...';
qaClasses: string = 'red right underlined';
selected: boolean = false;
valid: boolean = true;
imgUrl: string = `../assets/Hopetoun_falls (1).jpg`
viewArticle: boolean = true;
currrentStyles: object = {};
currentClasses: object = {
  selected:false,
  valid: false
}  

constructor() { }

setCurrentStyles(): void{
  this. currrentStyles ={
    backgroundcolor: this.selected ? 'lightgreen' : 'lightpink',
    border: this.valid ? '5px solid green' : '5px solid red' 
  }
}

sendMessage(): void{
  console.log(`Hello world`)
}

  ngOnInit() {
  }

}
