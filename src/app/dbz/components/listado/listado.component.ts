import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Caracter } from '../../interfaces/caracteres.interface';

@Component({
  selector: 'dbz-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  @Input()
  public listadoCaracter: Caracter[] = [
    {
      id: '',
      nombre: 'Truncks',
      poder: 0
    }
  ];

  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();

  onDeletePersonaje(id: string): void {
    this.onDeleteId.emit(id)
  }
}
