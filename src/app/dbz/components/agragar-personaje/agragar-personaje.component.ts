import { Component, EventEmitter, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracteres.interface';

@Component({
  selector: 'dbz-agragar-personaje',
  templateUrl: './agragar-personaje.component.html',
  styleUrls: ['./agragar-personaje.component.css']
})
export class AgragarPersonajeComponent {

  @Output()
  public onNewPersonaje: EventEmitter<Caracter> = new EventEmitter();

  public personaje: Caracter = {
    id: '',
    nombre: '',
    poder: 0
  }

  emitirPersonaje(): void {
    if (this.personaje.nombre.length === 0) return;
    this.onNewPersonaje.emit(this.personaje);
    this.personaje = { id: '', nombre: '', poder: 0 }
  }
}
