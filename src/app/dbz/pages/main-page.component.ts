import { Component } from '@angular/core';

import { Caracter } from '../interfaces/caracteres.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private dbzService: DbzService) { }

    get personajes(): Caracter[] {
        return [...this.dbzService.caracteres];
    }

    onDeletePersonaje(id: string): void {
        this.dbzService.deletePersonajeById(id);
    }

    onNewPersonaje(personaje: Caracter) {
        this.dbzService.addNewPersonaje(personaje);
    }
}