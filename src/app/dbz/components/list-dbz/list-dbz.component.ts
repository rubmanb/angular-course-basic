import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list-dbz',
  templateUrl: './list-dbz.component.html',
  styleUrl: './list-dbz.component.css'
})
export class ListDbzComponent {

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public character: Character[] = [
    {name: 'Trunks', power: 10},
  ]

  onDeleteItem(index: number):void{
    console.log({index});
  }

  onDeleteId(id?: string):void{
    if(!id) return;
    this.onDeleteCharacter.emit(id);
  }
}
