import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { HeroeComponent } from "./heroe/heroe.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";


@NgModule({
    declarations: [
        HeroeComponent,
        HeroesListComponent
    ],
    exports: [
        HeroeComponent,
        HeroesListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}