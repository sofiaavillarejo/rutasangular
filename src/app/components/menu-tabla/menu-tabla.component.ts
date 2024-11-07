import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  templateUrl: './menu-tabla.component.html',
  styleUrl: './menu-tabla.component.css'
})
export class MenuTablaComponent {
  numeros: Array<number>;

  constructor(){
    this.numeros = [];
    
  }
  ngOnInit(){
    for (let i = 0; i < 7; i++) {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      this.numeros.push(randomNum);
    }
    console.log(this.numeros);
  }
}
