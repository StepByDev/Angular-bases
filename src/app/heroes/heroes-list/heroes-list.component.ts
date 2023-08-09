import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  public heroes: string[] = ['Ironman', 'Spiderman', 'Batman', 'Flash']
  public deletedHeroe?: string = '';

  borrarHeroe(): void {
    this.deletedHeroe = this.heroes.pop();
  }

}
