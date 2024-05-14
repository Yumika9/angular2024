import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
    public title:string = 'Soy el contador';
    public contador:number = 10;
    incremento(num:number): void {
      this.contador += num;
    }
    reiniciar():void {
      this.contador = 10;
    
  }
}
