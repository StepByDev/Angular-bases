import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  public nombre: string = 'Ironman';
  public edad: number = 24;

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 31;
  }

  reiniciar(): void {
    this.nombre = 'Sin definir';
    this.edad = 0;
  }
}
