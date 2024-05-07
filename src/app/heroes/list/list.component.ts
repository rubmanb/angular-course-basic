import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroes_names: string[] = [
    "Iron Man",
    "Spider-Man",
    "Thor",
    "Hulk",
    "Captain America",
    "Black Widow",
    "Doctor Strange",
    "Black Panther",
    "Captain Marvel",
    "Ant-Man",
    "Wolverine",
    "Deadpool",
  ];
  public deletedHero: any = '';


  removeHero():void{
    this.deletedHero = this.heroes_names.pop();
  }

  addHero(): void {
    this.heroes_names.push('Capitana marvel');
  }
}

