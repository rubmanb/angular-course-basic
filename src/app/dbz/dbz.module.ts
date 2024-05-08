import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { ListDbzComponent } from './components/list-dbz/list-dbz.component';


@NgModule({
  declarations: [MainPageComponent, ListDbzComponent, AddCharacterComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [MainPageComponent, ListDbzComponent, AddCharacterComponent]
})
export class DbzModule { }
