import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name_hero: string = 'Ironman';
  public real_name: string = 'Tony Stark'
  public age: number = 45;

  constructor(){}

  get capitalizedName(){
    return this.name_hero.toUpperCase()
  }

  getHeroDescription():string{
    return `${this.name_hero} - ${this.age}`
  }

  changeName():void{
    this.name_hero = 'Spiderman'
  }

  changeRealName(): void{
    this.real_name = 'Peter Parker'
  }

  changeAge():void{
    this.age = 20;
  }

  resetForm() {
    this.name_hero = 'Ironman';
    this.real_name = 'tony Stark';
    this.age = 45;
  }
}
