import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from './../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  characters: Character[] = [
    {id: uuid(), name: 'krilin', power: 500},
    {id: uuid(), name: 'goku', power: 10000},
    {id: uuid(), name: 'vegeta', power: 8000}
  ];


  constructor() { }

  addCharacter(character: Character): void{
    const newCharacter: Character = {
      id: uuid(),
      ...character
    };
    this.characters.push(newCharacter);
  }

  /* onDeleteCharacter(index: number): void{
    this.characters.splice(index, 1);
  } */

  deleteCharacterById(id: string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
