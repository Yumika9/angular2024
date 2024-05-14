import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrl: './alumno.component.css'
})
export class AlumnoComponent {
  public title:string = 'Alumno';
  public nombre:string = 'Esteban';
  public edad:number = 19;
  public noControl:string ='248251';
  public direccion:string ='Avenida Juarez #87';

  editName():void {
    this.nombre= 'Ximena';

  }
  editEdad():void {
    this.edad= 19;
  }
  reset():void{
    this.nombre='Esteban';
    this.edad=19;
  }
}
