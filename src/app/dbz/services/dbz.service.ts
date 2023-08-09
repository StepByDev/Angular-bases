import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Caracter } from '../interfaces/caracteres.interface';


@Injectable({
    providedIn: 'root'
})
export class DbzService {

    constructor() { }

    public caracteres: Caracter[] = [
        {
            id: uuid(),
            nombre: 'Krillin',
            poder: 500
        },
        {
            id: uuid(),
            nombre: 'Gohan',
            poder: 50000
        },
        {
            id: uuid(),
            nombre: 'Goku',
            poder: 90000
        },
        {
            id: uuid(),
            nombre: 'Vegueta',
            poder: 70000
        }
    ];

    addNewPersonaje(personaje: Caracter): void {
        const newPersonaje: Caracter = { ...personaje, id: uuid() }
        this.caracteres.push(newPersonaje);
    }

    deletePersonajeById(id: string) {
        this.caracteres = this.caracteres.filter(personaje => personaje.id !== id);
    }
}